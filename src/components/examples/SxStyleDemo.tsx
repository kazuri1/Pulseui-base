import React from "react";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";
import { Input } from "../atoms/Input";
import { Badge } from "../atoms/Badge";
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from "../atoms/Accordion";
import { Checkbox } from "../atoms/Checkbox";
import { Tag } from "../atoms/Tag";
import { Icon } from "../atoms/Icon";
import { Star } from "../atoms/Icon/IconSet";

export const SxStyleDemo: React.FC = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem", color: "var(--color-primary-6)" }}>
        SX/Style Props Demo
      </h1>
      
      <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
        This demo showcases how all components now support sx/style props for consistent styling.
      </p>

      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        
        {/* Button with sx props */}
        <Card
          title="Button with SX Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-primary-3)",
            borderRadius: "lg"
          }}
        >
          <Button 
            sx={{ 
              m: 2, 
              p: 3, 
              backgroundColor: "primary",
              borderRadius: "lg",
              width: "full"
            }}
          >
            Styled Button
          </Button>
        </Card>

        {/* Input with sx props */}
        <Card
          title="Input with SX Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-success-3)",
            borderRadius: "lg"
          }}
        >
          <Input 
            placeholder="Styled input..."
            sx={{ 
              m: 2, 
              p: 3, 
              backgroundColor: "white",
              border: "2px solid var(--color-success-4)",
              borderRadius: "lg"
            }}
          />
        </Card>

        {/* Badge with sx props */}
        <Card
          title="Badge with SX Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-warning-3)",
            borderRadius: "lg"
          }}
        >
          <Badge 
            sx={{ 
              m: 2, 
              p: 3, 
              backgroundColor: "warning",
              color: "white",
              borderRadius: "full",
              fontSize: "lg"
            }}
          >
            Styled Badge
          </Badge>
        </Card>

        {/* Accordion with sx props */}
        <Card
          title="Accordion with SX Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-info-3)",
            borderRadius: "lg"
          }}
        >
          <Accordion 
            sx={{ 
              m: 2, 
              backgroundColor: "white",
              borderRadius: "md",
              border: "1px solid var(--color-info-4)"
            }}
          >
            <AccordionItem id="item-1">
              <AccordionHeader 
                itemId="item-1"
                sx={{ 
                  backgroundColor: "info",
                  color: "white",
                  borderRadius: "md"
                }}
              >
                Styled Accordion Header
              </AccordionHeader>
              <AccordionContent itemId="item-1">
                <p>This accordion content is styled with sx props!</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        {/* Checkbox with sx props */}
        <Card
          title="Checkbox with SX Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-error-3)",
            borderRadius: "lg"
          }}
        >
          <Checkbox 
            label="Styled Checkbox"
            sx={{ 
              m: 2, 
              p: 3, 
              backgroundColor: "white",
              border: "2px solid var(--color-error-4)",
              borderRadius: "md"
            }}
          />
        </Card>

        {/* Tag with sx props */}
        <Card
          title="Tag with SX Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-secondary-3)",
            borderRadius: "lg"
          }}
        >
          <Tag 
            sx={{ 
              m: 2, 
              p: 3, 
              backgroundColor: "secondary",
              color: "white",
              borderRadius: "full",
              fontSize: "lg"
            }}
          >
            Styled Tag
          </Tag>
        </Card>

        {/* Icon with sx props */}
        <Card
          title="Icon with SX Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-primary-3)",
            borderRadius: "lg"
          }}
        >
          <Icon 
            icon={Star}
            sx={{ 
              m: 2, 
              p: 3, 
              backgroundColor: "primary",
              color: "white",
              borderRadius: "full",
              fontSize: "xl"
            }}
          />
        </Card>

        {/* Mixed styling example */}
        <Card
          title="Mixed SX + Style Props"
          sx={{ 
            backgroundColor: "surface", 
            border: "2px solid var(--color-success-3)",
            borderRadius: "lg"
          }}
        >
          <Button 
            sx={{ 
              m: 2, 
              backgroundColor: "success",
              color: "white"
            }}
            style={{ 
              border: "3px dashed var(--color-warning-6)",
              transform: "rotate(2deg)"
            }}
          >
            Mixed Styling
          </Button>
        </Card>

      </div>

      <div style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "var(--color-surface-100)", borderRadius: "lg" }}>
        <h2>Key Benefits of SX/Style Props</h2>
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          <li><strong>Consistent API:</strong> All components use the same styling interface</li>
          <li><strong>Design Token Integration:</strong> SX props automatically use design system tokens</li>
          <li><strong>Flexibility:</strong> Override styles at the component level</li>
          <li><strong>Performance:</strong> Efficient style merging and processing</li>
          <li><strong>Developer Experience:</strong> Familiar API similar to MUI and other design systems</li>
        </ul>
      </div>
    </div>
  );
};
