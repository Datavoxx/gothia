import LevelCard from "@/components/LevelCard";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const handleLevelSelect = (level: string) => {
    toast({
      title: `${level} vald`,
      description: `Du har valt ${level}`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      {/* Header */}
      <div className="mb-16 text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold text-foreground mb-2">Välj nivå</h1>
        <p className="text-muted-foreground">Välj den nivå du vill använda</p>
      </div>

      {/* Level Cards */}
      <div className="flex flex-col sm:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <LevelCard
          title="Level 1"
          description="Grundläggande"
          onClick={() => handleLevelSelect("Level 1")}
        />
        <LevelCard
          title="Level 2"
          description="Avancerad"
          onClick={() => handleLevelSelect("Level 2")}
        />
      </div>
    </div>
  );
};

export default Index;
