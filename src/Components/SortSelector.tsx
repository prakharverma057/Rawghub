import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added(Latest)" },
    { value: "name", label: "Name(A-Z)" },
    { value: "-name", label: "Name(Z-A)" },
    { value: "-rating", label: "Avg Rating" },
    { value: "-released", label: "Released(Old-New)" },
    { value: "released", label: "Released(New-Old)" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By:{currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => {
          return (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              value={order.value}
              key={order.value}
            >
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
