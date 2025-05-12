import { Link } from "react-router-dom";
import { Card } from "./ui/card";

type countryProps = {
  id: number;
  name: string;
  emoji: string;
  code: string;
  continent?: continentsProps | undefined;
};

type continentsProps = {
  name: string;
};

export function CountryCard(props: countryProps) {
  return (
    <Link to={`/countries/${props.code}`}>
      <Card className="flex gap-1 overflow-hidden justify-center w-[20vw] h-[20vh] bg-gray-100">
        <h3 className="text-center font-bold">{props.name}</h3>
        <p className="text-center">{props.emoji}</p>
      </Card>
    </Link>
  );
}
