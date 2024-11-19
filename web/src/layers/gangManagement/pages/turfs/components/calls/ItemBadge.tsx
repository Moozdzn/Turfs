import React from "react";
import { Badge, Tooltip, Text } from "@mantine/core";
import { TurfUpgradeItem } from "../../../../../../typings";

const ItemBadge: React.FC<{ item: TurfUpgradeItem }> = ({ item }) => {
    return (
        <Tooltip label={item.description}>
            <Badge 
                color='blue'
                leftSection={<Text>{item.amount}x</Text>}
            >
                {item.label}
            </Badge>
        </Tooltip>
    )
}

export default ItemBadge;