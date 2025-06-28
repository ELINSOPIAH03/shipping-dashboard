import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { subDays, format } from 'date-fns';

const CalendarHeatmapComponent: React.FC = () => {
    const today = new Date();
    const startDate = subDays(today, 365);

    const generateData = (): HeatmapValue[] => {
        return Array.from({ length: 366 }, (_, i) => {
            const date = subDays(today, i);
            return {
                date: format(date, 'yyyy-MM-dd'),
                count: Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0,
            };
        });
    };


    return (
        <div className="w-full overflow-x-auto">
            <CalendarHeatmap
                startDate={startDate}
                endDate={today}
                values={generateData()}
                classForValue={(value) => {
                    if (!value) return 'color-empty';
                    return `color-scale-${value.count}`;
                }}
                tooltipDataAttrs={(value: any) => ({
                    'data-tip': `${value.date}: ${value.count} aktivitas`,
                })}
                showWeekdayLabels={true}
            />
        </div>
    );
};

export default CalendarHeatmapComponent;
