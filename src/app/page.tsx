import { Player } from "@/components/Player";
import { Button } from "@/components/ui/Button";

export default function Home() {
  function handleAIPlay() {}

  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <div className="flex items-center gap-4">
        <Player player="X" size="md" />
        <Player player="O" size="md" />
      </div>

      <h2 className="text-5xl mb-4">Choose your play mode</h2>
      <div className="flex items-center gap-8">
        <Button.Root styleType="PRIMARY">
          <Button.Text>With AI</Button.Text>
        </Button.Root>
        <Button.Root styleType="SECONDARY">
          <Button.Text>With a friend</Button.Text>
        </Button.Root>
      </div>
    </div>
  );
}
