import { Paragraph } from '../shared/Paragraph';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
	className?: string;
}

export const Service = ({ title, description, icon, className="" }: ServiceProps) => {
  return (
    <div
      className={`p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden ${className}`}
    >
      <div className="rounded-xl bg-body shadow shadow-fuchsia-300 p-3 text-heading-1 w-max relative">
        {icon}
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {title}
        </h2>
        <Paragraph> {description}</Paragraph>
      </div>
    </div>
  );
};
