import jeremy from '../images/image-jeremy.png';
import data from '../data.json';
import { useState } from 'react';
import DashboardCard from './DashboardCard';
const Dashbourd = () => {
    const [dashboardData, setDashboardData] = useState(data);
    const [timeFrame, setTimeFrame] = useState('daily');
    const daily = timeFrame.daily;
    return (
        <div className="dashboard">
            <div className="dashboard-section">
                <div className="user">
                    <img src={jeremy} alt="Jeremy Robson" width={80} />
                    <div className="text">
                        <p className='report'>Report for</p>
                        <h2>Jeremy Robson</h2>
                    </div>
                </div>
                <div className="time">
                    <p className={timeFrame === 'daily' ? 'active' : ''} onClick={(e) => { setTimeFrame(e.target.innerText.toLowerCase()) }}>Daily</p>
                    <p className={timeFrame === 'weekly' ? 'active' : ''} onClick={(e) => { setTimeFrame(e.target.innerText.toLowerCase()) }}>Weekly</p>
                    <p className={timeFrame === 'monthly' ? 'active' : ''} onClick={(e) => { setTimeFrame(e.target.innerText.toLowerCase()) }}>Monthly</p>
                </div>
            </div>
            <div className="dashboard-cards">
                {dashboardData.map((item, index) => {
                    return (
                        <DashboardCard
                            key={index}
                            timeFrame={timeFrame}
                            title={item.title}
                            dailyCur={item.timeframes.daily.current}
                            dailyPrev={item.timeframes.daily.previous}
                            weeklyCur={item.timeframes.weekly.current}
                            weeklyPrev={item.timeframes.weekly.previous}
                            monthlyCur={item.timeframes.monthly.current}
                            monthlyPrev={item.timeframes.monthly.previous}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Dashbourd