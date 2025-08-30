import StatsContent from "@/components/Stats/StatsContent";
import { getComponentDetails } from "@/utils/getComponentDetails";

const Stats = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  return <StatsContent stats={componentData} />;
};

export default Stats;
