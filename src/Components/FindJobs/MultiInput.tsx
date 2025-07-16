import {
  Checkbox,
  CheckIcon,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  useCombobox,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconSearch, IconSelector } from '@tabler/icons-react';

const MultiInput = (props: any) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>(props.options ?? []);
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    if (Array.isArray(props.options)) {
      setData(props.options);
    }
  }, [props.options]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const exactOptionMatch = Array.isArray(data)
    ? data.some((item) => item === search)
    : false;

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.slice(0, 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) =>
      item.toLowerCase().includes(search.trim().toLowerCase())
    )
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            size="xs"
            color="bluegrey2"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span className="text-blueblack2">{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          variant="unstyled"
          rightSection={<IconSelector />}
          onClick={() => combobox.toggleDropdown()}
          leftSection={
            <div className="text-bluegrey1 p-1 bg-blueblack2/80 rounded-full mr-2">
              <props.icon />
            </div>
          }
          className="bg-blueblack2/60 border border-bluegrey1/30 shadow-sm rounded-lg px-2 py-1 text-bluegrey3 transition-colors duration-200 focus-within:bg-blueblack2/40 hover:bg-blueblack2/40"
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && <Pill>+{value.length - 1} more</Pill>}
              </>
            ) : (
              <Input.Placeholder className="!text-bluegrey3 font-semibold">
                {props.title}
              </Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <div className="bg-blueblack2/80 bg-gradient-to-br from-blueblack3/80 to-bluegrey1/30 backdrop-blur-lg border border-bluegrey1/30 shadow-2xl rounded-2xl p-2 text-white">
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search values"
          className="bg-bluegrey3 text-white font-semibold"
        />
        <Combobox.Options>
          {data
            .filter((item) =>
              item.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((item) => (
              <Combobox.Option 
                value={item} 
                key={item} 
                active={value.includes(item)}
                className={
                  value.includes(item)
                    ? 'bg-bluegrey1/20 text-white font-semibold'
                    : 'hover:bg-bluegrey1/10 hover:text-white text-white font-semibold'
                }
              >
                <Group gap="sm">
                  <Checkbox
                    size="xs"
                    color="bluegrey2"
                    checked={value.includes(item)}
                    onChange={() => {}}
                    aria-hidden
                    tabIndex={-1}
                    style={{ pointerEvents: 'none' }}
                  />
                  <span className="text-blueblack2">{item}</span>
                </Group>
              </Combobox.Option>
            ))}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">
              + Create {search}
            </Combobox.Option>
          )}

          {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
        </div>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;
