import { Cell, Pie, PieChart, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';


// #endregion
export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {




  // data

console.log(JSON.parse(localStorage.getItem("timeline"))||[], "loc")
const timelineData= JSON.parse(localStorage.getItem("timeline"))||[];

let totalText = 0;
let totalCall = 0;
let totalVideo = 0;

timelineData.forEach(element => {
if (element.conversionWay=="Video") {
  totalVideo++;
} else if (element.conversionWay=="Call"){  
  totalCall++;
}  else if (element.conversionWay=="Text"){  
  totalText++;
}else
{return;}
}
)

const data = [
  { name: 'Text', value: totalText },
  { name: 'Call', value: totalCall },
  { name: 'Video', value: totalVideo },
];

console.log(totalCall,totalText,totalVideo,"abcd")


const colors = ['#7E35E1', '#244D3F', '#37A163'];






  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
         <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        {data.map((entry, index) => (
          <Cell key={index} fill={colors[index]} />
        ))}
      </Pie>
      {/* <RechartsDevtools /> */}
    </PieChart>
  );
}