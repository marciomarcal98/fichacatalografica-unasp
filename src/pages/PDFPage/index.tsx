import { Page, Text, View, Document, StyleSheet, PDFViewer, Font  } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom'

Font.register({
  family: 'Roboto Mono',
  format: 'truetype',
  src: '../../assets/RobotoMono-Regular.ttf'
});

// Create styles
const styles = StyleSheet.create({
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
    fontFamily: 'Roboto Mono',
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

interface LocationState {
  name: string
  lastname: string
  paperType: string
  course: string
  title: string
  code: string
  conclusionYear: string
  publicationYear: string
  pages: string
  city: string
  leaderName: string
  subjects: ['']
}

export function PDFPage() {
  const location = useLocation()
  const { 
    name, 
    lastname, 
    paperType, 
    course, 
    title, 
    code, 
    conclusionYear, 
    publicationYear, 
    pages,
    city, 
    leaderName,
    subjects
  } = location.state as LocationState

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.view}>
            <View style={styles.internalViewLeft}>
              <Text style={styles.span}>aaaaa</Text>
              <Text>{code}</Text>
            </View>
            <View style={styles.internalViewRight}>
              <Text>{lastname}, {name}.</Text>
              <Text><Text style={styles.span}>aaa</Text>{title} / {name} {lastname}, {conclusionYear}.</Text>
              <Text style={styles.textsMarginBottom}><Text style={styles.span}>aaa</Text>{pages} páginas.</Text>
              <Text style={styles.textsMarginBottom}><Text style={styles.span}>aaa</Text>Orientador(a): {leaderName}</Text>
              <Text style={styles.textsMarginBottom}><Text style={styles.span}>aaa</Text>{paperType} - Centro Universitário Adventista de São Paulo. Curso de {course}, {city}, {publicationYear}.</Text>
              <Text style={styles.textsMarginBottom}><Text style={styles.span}>aaa</Text>{subjects.map((subject, index) => subject !== '' && `${index + 1}. ${subject}. `)}I. Centro Universitário Adventista de São Paulo. II. Título.</Text>
            </View>
          </View>
          <View style={styles.footerView}>
            <Text>Dados de Catalogação e Classificação</Text>
            <Text>Realizado pela Biblioteca Universitária do UNASP</Text>
            <Text>Bibliotecária responsável: Eliethe Xavier de Albuquerque</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}