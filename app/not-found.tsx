import Mascot from "@/components/Mascot";
import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="wrap page nf">
      <Mascot mood="panic" size={140} title="panicking mascot" />
      <h1 className="h-xl">that page doesn&apos;t exist.</h1>
      <p className="lead">it may have moved. the home page still works.</p>
      <ButtonLink href="/">back home</ButtonLink>
    </div>
  );
}
