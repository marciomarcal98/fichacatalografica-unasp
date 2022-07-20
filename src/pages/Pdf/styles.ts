import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  page: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '27cm',
    padding: 20,
    fontFamily: 'Courier',
    fontSize: '9pt'
  },
  view: {
    padding: 10,
    border: '2px solid #000',
    width: '12.5cm',
    height: '7.5cm',
    marginBottom: 5,
    flexDirection: 'row'
  },
  internalViewLeft: {
    marginRight: 15
  },
  internalViewRight: {
    width: '10cm'
  },
  span: {
    color: '#fff'
  },
  textsMarginBottom: {
    marginBottom: 15
  },
  footerView: {
    fontSize: '8pt',
    flexDirection: 'column',
    alignItems:'center'
  }
});