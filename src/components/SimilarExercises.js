import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'


const SimilarExercises = ({targetMuscleExercises, equipmentExercise}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'} }}>
      <Typography variant='h3' mb={5}>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
{targetMuscleExercises.length   ? <HorizontalScrollbar data={targetMuscleExercises} /> : 'Loading....'}
</Stack>
<Typography variant='h3' mb={5}>
        Exercise that use the same equipment
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
{equipmentExercise.length  ? <HorizontalScrollbar data={equipmentExercise} /> : 'Loading....'}
</Stack>

    </Box>
  )
}

export default SimilarExercises