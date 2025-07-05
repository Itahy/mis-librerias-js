# mis-librerias-js

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
OBJETIVO:
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Crear una librería JavaScript funcional (sin componentes visuales) y documentar su implementación en un repositorio de GitHub.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------
								
					TECNOLÓGICO NACIONAL DE MEXICO
	
                 			INSTITUTO TECNOLÓGICO DE OAXACA			

				Departamento de Ingeniería en Sistemas Computacionales

				Materia: Desarrollo De Software Para La Toma De Decisiones
       
				“Librería Enlace de repositorio de Github y/o GitHub Pages”

					Profesor: Martinez Nieto Adelina
		
			Equipo: 
				Ramos Jimenéz Xóchitl Itahy
				Varela Vera  Biani Bisalua

			Grupo:   VSI
					Oaxaca, Oaxaca, a 03 de julio de 2025.



--------------------------------------------------------------------------------------------------------------------------------------------------------------------
NOMBRE DE LA LIBRERIA:
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
impuestos.js

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
DESCRIPCIÓN:
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

La librería impuestos.js está diseñada para facilitar el cálculo de obligaciones fiscales y la generación de claves seguras en aplicaciones web o sistemas administrativos. Esta librería automatiza y simplifica operaciones comunes relacionadas con impuestos y seguridad, como:

Cálculo de IVA: Obtiene el monto del impuesto al valor agregado y el total con IVA incluido.
Cálculo de ISR: Determina el impuesto sobre la renta y el ingreso neto.
Generador de claves seguras: Crea contraseñas aleatorias seguras usando letras, números y símbolos.
Cálculo de impuesto predial: Calcula el pago de predial con base en el valor catastral y una tasa establecida.
Cálculo de tenencia vehicular: Determina el monto de tenencia considerando el valor y año del automóvil.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
¿QUÉ PROBLEMA RESUELVE?
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

impuestos resuelve la necesidad de contar con una solución unificada, reutilizable y confiable para operaciones fiscales comunes, especialmente útil en sistemas contables, formularios de gobierno, aplicaciones financieras o simuladores de trámites.

INSTALACIÓN: 

Puedes incluir la librería en tu proyecto HTML de dos formas:

🔹 Opción 1: Descarga directa
Guarda el archivo impuestos.js en tu carpeta /js/ y luego inclúyelo así:
<script src="libreria/impuestos.js"></script>

🔹 Opción 2: Desde un CDN personalizado (si la subes a un repositorio o servidor)
<script src="https://cdn.jsdelivr.net/gh/Itahy/mis-librerias.js/librerias/impuestosLib.js"> </script>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
USO CON OPCIÓN UNO:
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
	<!DOCTYPE html>
	<html lang="es">
	<head>
	    <meta charset="UTF-8">
	    <title>Calculadora de IVA</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <!-- Bootstrap CSS -->
	    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body class="bg-light">
	    <div class="container py-5">
	        <div class="row justify-content-center">
	            <div class="col-md-6">
	                <div class="card shadow">
	                    <div class="card-header bg-primary text-white">
	                        <h4 class="mb-0">Calculadora de IVA</h4>
	                    </div>
	                    <div class="card-body">
	                        <form id="ivaForm">
	                            <div class="mb-3">
	                                <label for="precio" class="form-label">Precio sin IVA</label>
	                                <input type="number" class="form-control" id="precio" placeholder="Introduce el precio" min="0" step="0.01" required>
	                            </div>
	                            <div class="mb-3">
	                                <label for="iva" class="form-label">Porcentaje de IVA (%)</label>
	                                <input type="number" class="form-control" id="iva" value="21" min="0" step="0.01" required>
	                            </div>
	                            <button type="submit" class="btn btn-success w-100">Calcular</button>
	                        </form>
	                        <div class="mt-4" id="resultado" style="display:none;">
	                            <h5>Resultados:</h5>
	                            <p>IVA Calculado: $<span id="ivaCalculado"></span></p>
	                            <p>Total con IVA: $<span id="totalCalculado"></span></p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	<script src="librerias/impuestosLib.js"></script>
	<script src="js/funcionesLib1.js"></script>
	<!-- Bootstrap JS -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
	</body>
	</html>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
HTML
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Captura de pantalla 2025-07-04 160924](https://github.com/user-attachments/assets/b63682b3-130f-4936-a15e-0bf9fab94c09)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------
USO CON OPCIÓN DOS:
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
	<!DOCTYPE html>
	<html lang="es">
	<head>
	    <meta charset="UTF-8">
	    <title>Calculadora de IVA</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <!-- Bootstrap CSS -->
	    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body class="bg-light">
	    <div class="container py-5">
	        <div class="row justify-content-center">
	            <div class="col-md-6">
	                <div class="card shadow">
	                    <div class="card-header bg-primary text-white">
	                        <h4 class="mb-0">Calculadora de IVA</h4>
	                    </div>
	                    <div class="card-body">
	                        <form id="ivaForm">
	                            <div class="mb-3">
	                                <label for="precio" class="form-label">Precio sin IVA</label>
	                                <input type="number" class="form-control" id="precio" placeholder="Introduce el precio" min="0" step="0.01" required>
	                            </div>
	                            <div class="mb-3">
	                                <label for="iva" class="form-label">Porcentaje de IVA (%)</label>
	                                <input type="number" class="form-control" id="iva" value="21" min="0" step="0.01" required>
	                            </div>
	                            <button type="submit" class="btn btn-success w-100">Calcular</button>
	                        </form>
	                        <div class="mt-4" id="resultado" style="display:none;">
	                            <h5>Resultados:</h5>
	                            <p>IVA Calculado: $<span id="ivaCalculado"></span></p>
	                            <p>Total con IVA: $<span id="totalCalculado"></span></p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	
	    <!-- Librería de cálculo de IVA -->
	    <script src="https://cdn.jsdelivr.net/gh/Itahy/mis-librerias.js/librerias/impuestosLib.js"></script>
	    <script src="js/funcionesLib1.js"></script>
	
	    <!-- Bootstrap JS -->
	    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
	</body>
	</html>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

![image](https://github.com/user-attachments/assets/6ff6b10c-1927-4c03-a387-5cbe10cfa3a2)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
Funcionalidad con: https://cdn.jsdelivr.net/gh/Itahy/mis-librerias.js/librerias/impuestosLib.js
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/f7b1f9b5-4e85-4f25-b710-d2d9c61f1267)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/147555be-dfff-4a9a-9d29-78af7d6905aa)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/73e2ab70-2a2c-4752-87db-b1d87cf529e7)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/d3888473-bd84-4629-80e5-eb8fa55b79b7)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/b9881aa8-ccf8-48cf-b88d-932d1f5a8f73)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------


-------------------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript para llamar la libreria funciones/funcionesLib1.js 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Captura de pantalla 2025-07-04 161112](https://github.com/user-attachments/assets/79e533c1-dd22-4dbe-9c78-e25f1ac83e0d)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript para la libreria librerias/impuestos.js 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Captura de pantalla 2025-07-04 161411](https://github.com/user-attachments/assets/afb91950-d4da-49c3-aafb-a8dc18311d3b)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
CAPTURAS DE PANTALLA:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/03d6e7f8-1b8a-4710-977b-bcfc24f80887)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/adcb477e-08af-4557-9618-092789f838fa)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/cb4b2fae-5cc7-4a9c-807e-77e3b8ab3901)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/dc2d36be-9343-49f8-8e6f-634e72b74daf)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
PÁGINAS DE GITHUB: Repositorio(https://github.com/Itahy/mis-librerias.js)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
 https://itahy.github.io/mis-librerias.js/ejemploLibreriaClaveS.html
------------------------------------------------------------------------------------------------------------------------------------------------------------------ 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
 https://itahy.github.io/mis-librerias.js/ejemploLibreriaISR.html.html
------------------------------------------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
https://itahy.github.io/mis-librerias.js/ejemploLibreriaIva.html
------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
https://itahy.github.io/mis-librerias.js/ejemploLibreriaPredial.html
------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
https://itahy.github.io/mis-librerias.js/ejemploLibreriaTenencia.html
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

https://github.com/user-attachments/assets/a74d3fde-8996-4c55-984b-d233004724cb




