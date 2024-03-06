# ECOMODA - RRHH (*WORK IN PROGRESS*)

## Descripción del proyecto:

Modulo backend de recursos humanos del proyecto "ECOMODA" se encarga de: los contratos, los sueldos, de calcular las horas extras, de las vacantes de cada área, etc.

## Funcionalidades

* Registro de personal, ~~Contratos, gestion de asistencia (horas extra) y nomina.~~
* ~~Calculo de sueldos y nomina.~~


## Instalacion y uso

Para usar este proyecto, debes seguir estos pasos:

* Clonar el repositorio en tu máquina local con el comando `git clone`.
* Instalar las dependencias necesarias con el comando `npm install`.
* Crear en en un dialecto `mySQL` un esquema llamado `rrhh` para la conexion a la base de datos, puerto default `3006`.
* Ejecutar el servidor de desarrollo con el comando `npm start`.
* Abrir el navegador y acceder a la dirección `http://localhost:3000`.
* ~~ Documentacion de la api en el siguiente enlace https://documenter.getpostman.com/ ~~

## Tecnologias utilizadas

* JavaScript
* Node Js version v20.11.1
* Express 4.18.2
* Sequelize 6.37.1
* MySql 
* Postman

### Enunciado del proyecto

En la empresa de diseño de modas ECOMODA, la directiva realiza una reunión trimestral donde se presentan los informes detallados de cada departamento a los accionistas y jefes de los mismos. En la última reunión, se reportó 
que la empresa está en crisis y que los reportes no estuvieron a tiempo, ya que tuvieron inconsistencias en las cuentas y en los datos relacionados con los otros departamentos. Se observa que hubo un gran fraude, ya que no se explica 
cómo la empresa llegó a este nivel de crisis. Para evitar este tipo de situaciones futuras, la directiva llegó a la conclusión de que requiere un sistema que les permita ver los procedimientos en tiempo real, de forma clara y precisa, generando los reportes correspondientes de cada departamento, para así tomar mejores decisiones al analizar los datos tanto en el presente como en el futuro. 