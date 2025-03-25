
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Loader2, Copy, Check } from "lucide-react";

type InquiryType = 'general' | 'specific-defect' | 'structural' | 'subsidence' | 'party-wall';

interface TemplateOptions {
  includeVisitPrice: boolean;
  askForDrawings: boolean;
  responseType: 'formal' | 'friendly';
  inquiryType: InquiryType;
  customNotes: string;
}

const AIDraftGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState<TemplateOptions>({
    includeVisitPrice: true,
    askForDrawings: false,
    responseType: 'formal',
    inquiryType: 'general',
    customNotes: '',
  });

  const updateOption = <K extends keyof TemplateOptions>(key: K, value: TemplateOptions[K]) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  const generateResponse = async () => {
    setIsGenerating(true);
    try {
      // This function simulates an AI response generation
      // In a real implementation, this would call an API endpoint
      const response = await simulateResponseGeneration(options);
      setGeneratedResponse(response);
      toast.success("Response draft generated successfully");
    } catch (error) {
      console.error("Error generating response:", error);
      toast.error("Failed to generate response draft");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedResponse);
    setCopied(true);
    toast.success("Response copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Response Draft</CardTitle>
          <CardDescription>
            Configure template options to generate an appropriate response draft
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="inquiryType">Inquiry Type</Label>
            <Select 
              value={options.inquiryType} 
              onValueChange={(value) => updateOption('inquiryType', value as InquiryType)}
            >
              <SelectTrigger id="inquiryType">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="specific-defect">Specific Defect</SelectItem>
                <SelectItem value="structural">Structural Survey</SelectItem>
                <SelectItem value="subsidence">Subsidence</SelectItem>
                <SelectItem value="party-wall">Party Wall</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="includeVisitPrice">Include Site Visit Price (£250+VAT)</Label>
            <Switch 
              id="includeVisitPrice" 
              checked={options.includeVisitPrice}
              onCheckedChange={(checked) => updateOption('includeVisitPrice', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="askForDrawings">Request Drawings</Label>
            <Switch 
              id="askForDrawings"
              checked={options.askForDrawings}
              onCheckedChange={(checked) => updateOption('askForDrawings', checked)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="responseType">Response Tone</Label>
            <Select
              value={options.responseType}
              onValueChange={(value) => updateOption('responseType', value as 'formal' | 'friendly')}
            >
              <SelectTrigger id="responseType">
                <SelectValue placeholder="Select response tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customNotes">Additional Notes</Label>
            <Textarea
              id="customNotes"
              placeholder="Add any specific details to include in the response..."
              value={options.customNotes}
              onChange={(e) => updateOption('customNotes', e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={generateResponse} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Response"
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Response Draft</CardTitle>
          <CardDescription>
            Preview the generated response and copy it to your clipboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={generatedResponse}
            readOnly
            className="min-h-[300px] font-medium"
            placeholder="Your generated response will appear here..."
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setGeneratedResponse('')}
            disabled={!generatedResponse}
          >
            Clear
          </Button>
          <Button
            onClick={copyToClipboard}
            disabled={!generatedResponse}
            className="flex items-center"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy to Clipboard
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// This function simulates generating a response based on template options
// In a real implementation, this would call an API with a large language model
const simulateResponseGeneration = async (options: TemplateOptions): Promise<string> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const { includeVisitPrice, askForDrawings, responseType, inquiryType, customNotes } = options;
  
  let greeting = responseType === 'formal' 
    ? "Dear Client,\n\nThank you for your inquiry regarding our structural engineering services."
    : "Hi there,\n\nThanks for reaching out about our structural engineering services!";
  
  let serviceDescription = "";
  switch (inquiryType) {
    case 'specific-defect':
      serviceDescription = "For specific defect surveys, we provide a detailed assessment of the particular issue you've identified. Our engineers will examine the problem, determine its cause, and recommend appropriate remedial actions.";
      break;
    case 'structural':
      serviceDescription = "Our structural surveys provide a comprehensive assessment of the property's structural elements, including foundations, load-bearing walls, beams, and roof structure. We'll identify any defects or concerns and provide detailed recommendations.";
      break;
    case 'subsidence':
      serviceDescription = "Our subsidence investigation will assess the movement of your property, identify the cause of subsidence, and recommend appropriate remedial measures. This typically involves examining the foundation and soil conditions.";
      break;
    case 'party-wall':
      serviceDescription = "Regarding your party wall inquiry, our services include initial surveys, preparation of party wall awards, and ongoing monitoring as required under the Party Wall Act 1996.";
      break;
    default:
      serviceDescription = "We offer a range of structural engineering services, including structural surveys, specific defect investigations, party wall matters, and design services. Based on your requirements, we can tailor our approach to address your specific needs.";
  }
  
  let pricingInfo = includeVisitPrice
    ? "Our site visit fee is £250 plus VAT, which includes an initial assessment and verbal consultation. Following the visit, we can provide a detailed written report for an additional fee based on the scope of work required."
    : "";
  
  let drawingsRequest = askForDrawings
    ? "To help us better understand your project, it would be very helpful if you could send through any existing drawings of the property that you may have. This will enable us to provide more accurate advice and prepare appropriately for the site visit."
    : "";
  
  let customInfo = customNotes ? `\n\nSpecific notes regarding your inquiry: ${customNotes}` : "";
  
  let closing = responseType === 'formal'
    ? "Please let us know if you would like to proceed with our services or if you have any questions.\n\nKind regards,\n\nLondon Structural Surveys"
    : "Let me know if this works for you or if you have any other questions!\n\nBest wishes,\n\nLondon Structural Surveys";
  
  return `${greeting}\n\n${serviceDescription}\n\n${pricingInfo}\n\n${drawingsRequest}${customInfo}\n\n${closing}`;
};

export default AIDraftGenerator;
