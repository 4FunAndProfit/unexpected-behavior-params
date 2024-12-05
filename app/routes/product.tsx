import type { Route } from "./+types/product";
import { data } from "react-router";

export function loader({ params }: Route.LoaderArgs) {
  if (params.id === 'unexpected' ) {
    throw data("You should not go inside this route as it is another route", { status: 404 });
  }
  return { name: `Super cool product #${params.id}` };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  return <h1>{loaderData.name}</h1>;
}
