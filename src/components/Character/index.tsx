import Scene from "./Scene";

interface CharacterModelProps {
  variant?: "default" | "portrait";
}

const CharacterModel = ({ variant = "default" }: CharacterModelProps) => {
  return <Scene variant={variant} />;
};

export default CharacterModel;
