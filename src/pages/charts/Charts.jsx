import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userDevices } from "../../dummyDevice";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Charts() {
  return (
    <div>
      <FeaturedInfo />
      <Chart data={userDevices} title="User Analytics" grid dataKey="Active User"/>
      <div>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
