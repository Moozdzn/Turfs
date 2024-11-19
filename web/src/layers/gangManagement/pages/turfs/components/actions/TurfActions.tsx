import { Switch } from "@mantine/core";
import locales from "../../../../../../locales";
import { useEntryLeaveAlertState } from "../../../../../../state";
import { fetchNui } from "../../../../../../utils/fetchNui";
import { useState } from "react";

const TurfActions: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [entryLeaveAlerts, setEntryLeaveAlerts] = useEntryLeaveAlertState();

    const handleChange = async (checked: boolean) => {
        setIsLoading(true);
        setEntryLeaveAlerts(checked);
        const response = await fetchNui('setEntryLeaveAlerts', { checked }, { data: checked, delay: 1000 } );
        setIsLoading(false);
        setEntryLeaveAlerts(response);
    }

    return (
      <Switch
        label={locales.entry_leave_alerts}
        onLabel="ON"
        offLabel="OFF"
        checked={entryLeaveAlerts}
        onChange={(event) => handleChange(event.currentTarget.checked)}
        disabled={isLoading}
      />
    );
};

export default TurfActions;