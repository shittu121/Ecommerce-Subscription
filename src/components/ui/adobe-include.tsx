// app/components/IncludesList.tsx (or wherever you store components)
import Image from "next/image";

type IncludeItem = {
  img: string;
  text: string;
};

type IncludesListProps = {
  data: IncludeItem[];
  title?: string; // optional title (defaults to "Includes")
};

const IncludesList = ({ data, title = "Includes" }: IncludesListProps) => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold">{title}</h1>
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={item.img} alt={`icon-${index}`} height={20} width={20} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncludesList;
