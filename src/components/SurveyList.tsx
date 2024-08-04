import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const SurveyList: React.FC = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state: RootState) => state.survey.surveys);

  useEffect(() => {
    dispatch({ type: 'FETCH_SURVEYS_REQUEST' });
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Survey List
      </Typography>
      <List>
        {surveys.map((survey: any, index: any) => (
          <ListItem key={index}>
            <ListItemText primary={survey} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SurveyList;
