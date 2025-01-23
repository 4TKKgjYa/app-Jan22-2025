import { Button } from "~/components/ui/button";

export default function Index() {
  return (
    <div>
      <Button onClick={() => console.log("Button!")}>Click</Button>
    </div>
  );
}
