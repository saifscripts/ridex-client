import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function tan(degrees: number) {
  return Math.tan((degrees * Math.PI) / 180);
}

function calc(deg: number) {
  return 100 - 100 * tan(90 - deg);
}

export default function CouponWheel() {
  const array = [10, 30, 20, 50, 60, 80, 100, 35, 20];
  const deg = 360 / array.length;

  const handleClick = () => {
    alert(calc(deg).toFixed(2));
  };

  const x = calc(deg) < 0 ? 100 - calc(deg) : 100;
  const y = calc(deg) >= 0 ? calc(deg) : 0;

  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <div
        className={cn(
          'w-[60vh] h-[60vh] bg-primary/10 relative duration-1000 ease-in-out rounded-full overflow-hidden'
        )}
      >
        {' '}
        {array.map((item, index) => (
          <div
            className="w-[30vh] h-[30vh] border absolute top-0 right-0 origin-bottom-left  transition-transform bg-blue-400 text-2xl"
            style={{
              transform: `rotate(${index * deg}deg)`,
              clipPath:
                index === array.length - 1
                  ? `polygon(0 0, 100% 0, ${x}% ${y}%, 0% 100%)`
                  : undefined,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <Button onClick={handleClick} className="absolute bottom-10">
        Spin the wheel
      </Button>
    </div>
  );
}
