import { Link } from "react-router-dom";
import { Card } from "./ui/card";

type countryProps = {
  readonly name: string;
  readonly emoji: string;
  readonly code: string;
};

export function CountryCard(props: countryProps) {
  return (
    <Link className="" to={`/countries/${props.code}`}>
      <Card className="flex gap-1 overflow-hidden justify-center h-[10vh] md:h-[5vh] bg-gray-100 border border-gray-600 hover:bg-gray-200">
        <h3 className="text-center font-bold">{props.name}</h3>
        <p className="text-center">{props.emoji}</p>
      </Card>
    </Link>
  );
}
