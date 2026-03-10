import { Rating } from "@/components/shadcnblocks/rating";

const StarRating = ({ outOfFive = 4.5 }: { outOfFive: number }) => {
  return <Rating rate={outOfFive} />;
};

export default StarRating;
