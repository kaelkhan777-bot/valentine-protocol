import React, { useState, useEffect } from 'react';
import { Wrench } from 'lucide-react';

const DevTools = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [overrideDay, setOverrideDay] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('debug_day_override');
        if (stored) setOverrideDay(parseInt(stored));
    }, []);

    const handleSetDay = (dayIndex) => {
        if (dayIndex === null) {
            localStorage.removeItem('debug_day_override');
            setOverrideDay(null);
        } else {
            localStorage.setItem('debug_day_override', dayIndex);
            setOverrideDay(dayIndex);
        }
        window.location.reload(); // Refresh to apply changes
    };

    // Only show in dev mode or with a specific key combo (optional)
    // For now, hidden behind a small transparent trigger in bottom-left
    

export default DevTools;
