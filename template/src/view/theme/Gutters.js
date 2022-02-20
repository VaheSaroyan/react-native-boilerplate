import { StyleSheet } from 'react-native';

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./Theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['M', 'P']
 * <value>: is the value of the <size>
 */

export default function () {
  return StyleSheet.create({
    ...Array.from(Array(40).keys()).reduce(
      (acc, key) => ({
        ...acc,
        /* Margins */
        [`MB${key}`]: {
          marginBottom: key,
        },
        [`MT${key}`]: {
          marginTop: key,
        },
        [`MR${key}`]: {
          marginRight: key,
        },
        [`ML${key}`]: {
          marginLeft: key,
        },
        [`MV${key}`]: {
          marginVertical: key,
        },
        [`MH${key}`]: {
          marginHorizontal: key,
        },
        /* Paddings */
        [`PB${key}`]: {
          paddingBottom: key,
        },
        [`PT${key}`]: {
          paddingTop: key,
        },
        [`PR${key}`]: {
          paddingRight: key,
        },
        [`PL${key}`]: {
          paddingLeft: key,
        },
        [`PV${key}`]: {
          paddingVertical: key,
        },
        [`PH${key}`]: {
          paddingHorizontal: key,
        },
      }),
      {
        MLA: {
          marginLeft: 'auto',
        },
        MRA: {
          marginRight: 'auto',
        },
        MTA: {
          marginTop: 'auto',
        },
        MBA: {
          marginBottom: 'auto',
        },
      },
    ),
  });
}
