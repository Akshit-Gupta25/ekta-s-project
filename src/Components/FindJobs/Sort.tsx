import { useState } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary(high to low)'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs text-bluegrey3' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={180}
      position="bottom-start"
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div
          onClick={() => combobox.toggleDropdown()}
          className='cursor-pointer border border-bluegrey1/40 flex gap-2 px-2 py-1 rounded-xl items-center bg-blueblack2/60 text-bluegrey1 hover:bg-blueblack2/40 transition-colors duration-200'
        >
          {selectedItem} <IconAdjustments className='h-5 w-5 text-bluegrey1' />
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <div className="bg-blueblack2/80 bg-gradient-to-br from-blueblack3/80 to-bluegrey1/30 backdrop-blur-lg border border-bluegrey1/30 shadow-2xl rounded-2xl p-2 text-bluegrey3">
          <Combobox.Options>{options}</Combobox.Options>
        </div>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default Sort;