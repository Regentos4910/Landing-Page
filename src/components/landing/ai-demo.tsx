"use client";

import { useState } from "react";
import { suggestAlternativeMedications, SuggestAlternativeMedicationsOutput } from "@/ai/flows/suggest-alternative-medications";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AiDemo() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestAlternativeMedicationsOutput | null>(null);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const prescriptionDetails = formData.get("prescriptionDetails") as string;

    if (!prescriptionDetails.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some prescription details.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await suggestAlternativeMedications({ prescriptionDetails });
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred",
        description: "Failed to get suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          AI-Powered Alternative Suggestions
        </CardTitle>
        <CardDescription>
          Our AI can suggest similar, more affordable drug alternatives. Try it out!
          Enter a prescription (e.g., "Lipitor 20mg, once daily") to see it in action.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prescriptionDetails">Prescription Details</Label>
            <Textarea
              id="prescriptionDetails"
              name="prescriptionDetails"
              placeholder="e.g., Amoxicillin 500mg, 3 times a day for 7 days"
              rows={3}
              disabled={loading}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full sm:w-auto">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting Suggestions...
              </>
            ) : (
              "Suggest Alternatives"
            )}
          </Button>
        </form>
        {result && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Suggested Alternatives:</h3>
            <div className="p-4 bg-secondary/50 rounded-lg text-sm">
                <ul className="list-disc space-y-2 pl-5">
                    {result.alternativeMedications.split('\n').map((item, index) => {
                        const cleanedItem = item.replace(/^- /, '').trim();
                        if(cleanedItem) {
                            return <li key={index}>{cleanedItem}</li>
                        }
                        return null;
                    })}
                </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
