import React from 'react';
import { Box, TextField, Autocomplete, Chip, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { replaceList } from '../../redux/slices/worksSlice';

const CustomAutocomplite = () => {
  const dispatch = useAppDispatch();
  const worksList = useAppSelector((state) => state.worksSlice.worksList);

  const [value, setValue] = React.useState(
    worksList.map((item) => ({
      title: item,
    }))
  );

  return (
    <Box component="div">
      <Autocomplete
        limitTags={1}
        sx={{ width: '100%' }}
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(_, newValue) => {
          dispatch(
            replaceList(
              newValue
                .filter((item) => item.title !== '')
                .map((item) => item.title)
            )
          );

          setValue([
            ...value,
            ...newValue.filter((option) => value.indexOf(option) === -1),
          ]);
        }}
        options={worksList.map((item) => ({ title: item }))}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Typography sx={{ fontFamily: ['Oswald'] }} key={index}>
              <Chip
                label={option ? option.title : ''}
                sx={{ fontSize: '10px' }}
                size="small"
                {...getTagProps({ index })}
                // disabled={fixedOptions.indexOf(option) !== -1}
                key={index}
              />
            </Typography>
          ))
        }
        isOptionEqualToValue={(option, value) => option.title === value.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Выбранные работы"
            size="small"
            InputLabelProps={{ style: { fontSize: '12px' } }}
            name="user_works"
          />
        )}
      />
    </Box>
  );
};

export default CustomAutocomplite;
