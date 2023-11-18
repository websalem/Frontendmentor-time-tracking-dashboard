import icon from '../images/icon-ellipsis.svg';
const DashboardCard = ({ title, timeFrame, dailyCur, dailyPrev, weeklyCur, weeklyPrev, monthlyCur, monthlyPrev }) => {
    console.log(timeFrame);
    return (
        <div className={"hours"}>
            <div className={title.toLocaleLowerCase().replace(/\s/g, '')}>
                <div className="content">
                    <header>
                        <p>{title}</p>
                        <img src={icon} alt="icon" />
                    </header>
                    <main>
                        {timeFrame === 'daily' ?
                            <>
                                <h2>{dailyCur}hrs</h2>
                                <p>yesterday - {dailyPrev}hrs</p></> : ''}
                        {timeFrame === 'weekly' ?
                            <>
                                <h2>{weeklyCur}hrs</h2>
                                <p>Last week - {weeklyPrev}hrs</p></> : ''}
                        {timeFrame === 'monthly' ?
                            <>
                                <h2>{monthlyCur}hrs</h2>
                                <p>Last month - {monthlyPrev}hrs</p></> : ''}
                    </main>
                </div>
            </div>
        </div>
    )
}
export default DashboardCard