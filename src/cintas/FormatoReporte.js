import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import moment from "moment";
import encabezado from "../assets/images/encabezado2.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    color: 'black'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    color: 'black',
    fontSize: 18,
    margin: 12,
    fontFamily: 'Times-Roman',

  },
  text: {
    color: 'black',
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: -35,
    marginHorizontal: 0,
    marginLeft: -35,
    marginRight: 0,
    height: 300,
    width: 600
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  fecha: {
    color: 'black',
    margin: 12,
    marginTop: -90,
    marginRight: -23,
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'Times-Roman'
  },

  table: {
    display: "table",
    width: "auto",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 20,
  },


  tableRow: {

    margin: "auto",
    flexDirection: "row",

  },
  tableRowTitulo: {
    margin: "auto",
    flexDirection: "row",

  },
  tableRowSubtittle: {

    margin: "auto",
    flexDirection: "row",
    backgroundColor: "#a4b494",


  },

  tableCol1: {
    width: "15%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1
  },
  tableCol2: {
    width: "20%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1
  },
  tableCol3: {
    width: "10%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1
  },
  tableCol4: {
    width: "15%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1
  },
  tableCol5: {
    width: "20%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1
  },
  tableCol6: {
    width: "20%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1
  },
  tableColTitulo: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#519872"
  },


  tableColPredio: {
    width: "20%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1
  },
  tableColPredioSuma2: {
    width: "20%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1,
  },
  tableColPredioSuma1: {
    width: "80%",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderBottom: 1,
  },

  tableCellSubtittle: {
    margin: "auto",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 11
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 10
  },


  tableCellTitulo: {
    marginLeft: 4,
    marginTop: 5,
    fontSize: 13,
  },

});



const dia = moment().date();
const mes = moment().month() + 1;
const anio = moment().year();

// Create Document Component
const FormatoReporte = (props) => {
  let tipo = props.tipoReporte;
  let finca = props.finca.nombre_finca;
  let validacion = false;
  if (props.datas) validacion = true;
  let desde = props.desde;
  let hasta = props.hasta;
  let validationSem = false;
  if (props.sem) validationSem = true;
  let suma=0;


  return (
    <PDFViewer style={{ width: "100%", height: "500px" }}>
      <Document>
        <Page style={styles.body}>

          <View object-fit="fill" style={styles.image}>
            <Image object-fit="fill" style={{ padding: "0, 0, 0, 0", margin: "0%, 0rem, 0rem, 0rem" }} src={encabezado} alt="images" />
          </View>
          <Text style={styles.fecha}>
            Fecha: {dia}/{mes}/{anio}
          </Text>
          {tipo === "predio" ? (
            <View>
              <Text style={styles.title}>Reporte De Plantaciones Por Predio</Text>
              {validacion &&
                <View style={styles.table}>
                  <View >

                    <View style={styles.tableRowTitulo}>
                      <View style={styles.tableColTitulo}>
                        <Text style={styles.tableCellTitulo}>PREDIO: {finca}</Text>
                      </View>
                    </View>

                    <View style={styles.tableRowSubtittle}>

                      <View style={styles.tableColPredio}>

                        <Text style={styles.tableCellSubtittle}>Fecha de registro</Text>
                      </View>

                      <View style={styles.tableColPredio}>

                        <Text style={styles.tableCellSubtittle}>Color de cinta</Text>
                      </View>
                      <View style={styles.tableColPredio}>
                        <Text style={styles.tableCellSubtittle}>Semana de siembra</Text>
                      </View>
                      <View style={styles.tableColPredio}>

                        <Text style={styles.tableCellSubtittle}>Semana de corte</Text>
                      </View>
                      <View style={styles.tableColPredio}>

                        <Text style={styles.tableCellSubtittle}>Cantidad</Text>
                      </View>
                    </View>


                  </View>
                  <View>
                    {props.datas.map((dato, i) => {
                        let numer=parseInt(dato.cantidad);
                        suma=suma+numer;
                      return (

                        <View style={styles.tableRow}>

                          <View style={styles.tableColPredio}>
                            <Text style={styles.tableCell}>{dato.fecha_registro}</Text>
                          </View>

                          <View style={styles.tableColPredio}>

                            <Text style={styles.tableCell}>{dato.color}</Text>
                          </View>
                          <View style={styles.tableColPredio}>

                            <Text style={styles.tableCell}>{dato.numero_semana}</Text>
                          </View>
                          <View style={styles.tableColPredio}>

                            <Text style={styles.tableCell}>{
                              dato.numero_semana + 10 > 52 ? (

                                0 + ((dato.numero_semana) % 10)) : (
                                  dato.numero_semana + 10
                                )
                            }</Text>
                          </View>
                          <View style={styles.tableColPredio}>
                            <Text style={styles.tableCell}>{dato.cantidad} </Text>
                          </View>
                        </View>

                      )
                    })
                    }
                    <View style={styles.tableRow}>
                    <View style={styles.tableColPredioSuma1}>

                      <Text style={styles.tableCell}>Total de plantas</Text>
                    </View>
                    <View style={styles.tableColPredioSuma2}>

                      <Text style={styles.tableCell}>{suma}</Text>
                    </View>
                    </View>

                  </View>

                </View>
              }
            </View>

          ) : tipo === "semana" ? (
            <View>
              <Text style={styles.title}>Reporte De Plantaciones Por Semana</Text>
              {validationSem &&
                <View style={styles.table}>
                  <View>


                    <View style={styles.tableRowTitulo}>

                      <View style={styles.tableColTitulo}>
                        <Text style={styles.tableCellTitulo}>RANGO DE SEMANA: {desde} - {hasta}</Text>
                      </View>

                    </View>
                    <View style={styles.tableRowSubtittle}>
                      <View style={styles.tableCol1}>

                        <Text style={styles.tableCellSubtittle}>Predio</Text>
                      </View>

                      <View style={styles.tableCol2}>

                        <Text style={styles.tableCellSubtittle}>Fecha de registro</Text>
                      </View>
                      <View style={styles.tableCol3}>

                        <Text style={styles.tableCellSubtittle}>Cantidad</Text>
                      </View>
                      <View style={styles.tableCol4}>

                        <Text style={styles.tableCellSubtittle}>Color de cinta</Text>
                      </View>
                      <View style={styles.tableCol5}>
                        <Text style={styles.tableCellSubtittle}>Semana de siembra</Text>
                      </View>
                      <View style={styles.tableCol6}>

                        <Text style={styles.tableCellSubtittle}>Semana de corte</Text>
                      </View>
                    </View>
                  </View>

                  {props.sem.map((dato, i) => {
                    return (


                      <View style={styles.tableRow}>
                        <View style={styles.tableCol1}>

                          <Text style={styles.tableCell}>{dato.nombre_finca}</Text>
                        </View>

                        <View style={styles.tableCol2}>

                          <Text style={styles.tableCell}>{dato.fecha_registro}</Text>
                        </View>
                        <View style={styles.tableCol3}>

                          <Text style={styles.tableCell}>{dato.cantidad} </Text>
                        </View>
                        <View style={styles.tableCol4}>

                          <Text style={styles.tableCell}>{dato.color}</Text>
                        </View>
                        <View style={styles.tableCol5}>

                          <Text style={styles.tableCell}>{dato.numero_semana}</Text>
                        </View>
                        <View style={styles.tableCol6}>

                          <Text style={styles.tableCell}>{
                            dato.numero_semana + 10 > 52 ? (

                              0 + ((dato.numero_semana) % 10)) : (
                                dato.numero_semana + 10
                              )
                          }</Text>
                        </View>
                      </View>
                    )
                  })
                  }
                </View>
              }
            </View>
          ) :
              (<Text></Text>)

          }
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default FormatoReporte;