import CoinsTap from "../../components/coins-tap/CoinsTap";
import point_up from "../../assets/point-up.svg";
import voltage from "../../assets/voltage.svg";
import { useEffect, useState } from "react";
import Button from "../../components/ui/button/Button";
import Badge from "../../components/ui/badge/Badge";
import { useTelegramAuth } from "../../hooks/useTelegramUser";
import { useScoreStore } from "../../stores/score";
import LevelProgress from "../../components/level-progress/LevelProgress";

function Home() {
  const user = useTelegramAuth();
  const { coins, level, addCoins, levels } = useScoreStore();

  const [limit] = useState(500);
  const [taps, setTaps] = useState(limit);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaps((prev) => (prev < limit ? prev + 1 : prev));
    }, 500);

    return () => clearInterval(interval);
  }, [limit]);

  // Handle taps and update coins using Zustand's addCoins method
  const handleTap = (tapCount: number) => {
    setTaps((prev) => Math.max(0, prev - tapCount));
    addCoins(tapCount); // Add coins based on the tap count (10 coins per tap)
  };

  return (
    <div className="p-5 py-8 h-full flex flex-col justify-between">
      <div className="px-4 pt-4 rounded-xl gradient_bg">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center
          bg-gradient-to-r from-[#6788D5] to-[#937CEF]">
            <span className="text-xl">👤</span>
          </div>
          <div>
            <h2>{user.first_name}</h2>
            <div className="flex items-center gap-1">
              <span className="text-sm text-secondary">Уровень {level}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 mt-3 bg-[#E2ECFF35] rounded-3xl overflow-hidden">
          <LevelProgress coins={coins} level={level} levels={levels} />
        </div>
      </div>

      <CoinsTap onTap={handleTap} coins={coins} isDisabled={taps === 0} />
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <Badge>
            <img src={point_up} alt="pointer" className="w-4 h-4" />
            <span className="text-sm text-white">{taps}</span>
            <span className="text-sm text-[#B7B7B7]">/{limit}</span>
          </Badge>
          <Button>
            <img src={voltage} className="w-4 h-4" />
            Улучшить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
