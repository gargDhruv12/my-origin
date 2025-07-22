import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightsPage = async() => {

    const { isOnboaeded } = await getUserOnboardingStatus();
    if (!isOnboaeded) {
        redirect("/onboarding");
    }

    return (
        <div>
            IndustryInsightsPage
        </div>
    )
}

export default IndustryInsightsPage;
