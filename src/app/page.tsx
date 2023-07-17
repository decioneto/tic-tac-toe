import { Player } from "@/components/Player";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <div className="flex items-center gap-4">
        <Player player="X" size="md" />
        <Player player="O" size="md" />
      </div>

      <h2 className="text-5xl mb-4">Choose your play mode</h2>
      <div className="flex items-center gap-8">
        <Link href={"#"}>
          <Button.Root styleType="PRIMARY">
            <Button.Text>With AI</Button.Text>
          </Button.Root>
        </Link>
        <Link href={"#"}>
          <Button.Root styleType="SECONDARY">
            <Button.Text>With a friend</Button.Text>
          </Button.Root>
        </Link>
      </div>
    </div>
  );
}
