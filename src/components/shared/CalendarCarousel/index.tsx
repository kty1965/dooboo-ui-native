import { StyleSheet, Text, View } from 'react-native';
import {
  addDays,
  addMonths,
  subDays,
} from 'date-fns';
import Calendar from './Calendar';
import React from 'react';
import { WeekOfDay } from './Calendar/CalendarUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const today = new Date();
const oneWeekAgo = subDays(today, 7);
const twoWeeksAgo = subDays(today, 14);
const threeDaysLater = addDays(today, 3);
const oneMonthLater = addMonths(today, 1);

function Item(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
      <Calendar
        locale="en"
        weekStartsOn={WeekOfDay.Thu}
        selectedDates={[
          oneWeekAgo,
          twoWeeksAgo,
          threeDaysLater,
          oneMonthLater,
        ]} />
    </View>
  );
}

export default Item;
