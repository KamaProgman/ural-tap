import { Copy } from "lucide-react";
import Button from "../../components/ui/button/Button";
import man_raising_hand from "../../assets/man-raising-hand.svg";
import { useReferralLink } from "../../hooks/query/referrals";

interface props {
  referralCode: string
  userId: number
}

const InviteFriends: React.FC<props> = ({ userId }) => {
  const { data: referralLink } = useReferralLink(userId);

  const handleCopy = async () => {
    if (!referralLink) return
    try {
      await navigator.clipboard.writeText(referralLink)
      alert("Ссылка скопирована")
    } catch (error) {
      console.error("Ошибка при копировании:", error);
    }
  }

  return (
    <div className="flex items-center gap-3 mt-6">
      <Button>
        Пригласить друзей
        <img src={man_raising_hand} alt="hand" className="w-6 h-6" />
      </Button>
      <Button className="!p-3" onClick={handleCopy}>
        <Copy size={20} color="#fff" />
      </Button>
    </div>
  )
}

export default InviteFriends