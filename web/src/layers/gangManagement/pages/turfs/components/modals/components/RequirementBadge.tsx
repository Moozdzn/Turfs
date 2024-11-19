import { Badge, Tooltip } from "@mantine/core";

interface Props {
    completed: boolean;
    label: string;}

const RequirementBadge: React.FC<Props> = ({ completed, label }) => {
    return (<Badge color={completed ? 'green' : 'blue'}>{label}</Badge>);
};

export default RequirementBadge;