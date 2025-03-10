import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "date_added:desc", label: "Date Added(Latest)" },
    { value: "name:asc", label: "Name(A-Z)" },
    { value: "name:desc", label: "Name(Z-A)" },
    { value: "number_of_user_reviews:desc", label: "Reviews(Best-Low)" },
    { value: "original_release_date:asc", label: "Released(Old-New)" },
    { value: "original_release_date:desc", label: "Released(New-Old)" },
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
