-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2+deb7u7
-- http://www.phpmyadmin.net
--
-- Servidor: mississippi.ic-itcr.ac.cr:3306
-- Tiempo de generación: 14-02-2017 a las 16:12:08
-- Versión del servidor: 5.5.50
-- Versión de PHP: 5.6.30-1~dotdeb+7.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sarburola`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE IF NOT EXISTS `curso` (
  `idCurso` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(32) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`idCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`idCurso`, `nombre`) VALUES
('IC1400', 'Fundamentos De Organizacion De C'),
('IC1802', 'Introduccion A La Programacion'),
('IC1803', 'Taller De Programacion'),
('IC2001', 'Estructuras De Datos'),
('IC2101', 'Programacion Orientada A Objetos'),
('IC3002', 'Analisis De Algoritmos'),
('IC3101', 'Arquitectura De Computadores'),
('IC4301', 'Bases De Datos I'),
('IC4302', 'Bases De Datos II');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galleria`
--

CREATE TABLE IF NOT EXISTS `galleria` (
  `idImagen` int(11) NOT NULL,
  `ruta` varchar(128) COLLATE latin1_spanish_ci NOT NULL,
  `idProyecto` int(11) NOT NULL,
  PRIMARY KEY (`idImagen`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE IF NOT EXISTS `proyecto` (
  `idProyecto` int(11) NOT NULL AUTO_INCREMENT,
  `idCurso` varchar(11) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(32) COLLATE latin1_spanish_ci NOT NULL,
  `resumen` varchar(128) COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(512) COLLATE latin1_spanish_ci NOT NULL,
  `tipo` varchar(16) COLLATE latin1_spanish_ci NOT NULL,
  `grupo` int(11) NOT NULL,
  `rol` varchar(16) COLLATE latin1_spanish_ci NOT NULL,
  `semestre` varchar(16) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`idProyecto`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`idProyecto`, `idCurso`, `nombre`, `resumen`, `descripcion`, `tipo`, `grupo`, `rol`, `semestre`) VALUES
(2, 'IC2101', 'Estimacao', 'Sistema de Adopción de Mascotas', 'El sistema le permite crear un usuario para reportar mascotas perdidas, buscar mascotas para adoptar, colaborar con donaciones o habilitar una Casa Cuna. Las mascotas son filtradas por sus características físicas. También facilita un espacio para reportar el comportamiento de los adoptantes.', 'Desarrollo', 4, 'Developer', 'Semestre II 2014');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `techProyecto`
--

CREATE TABLE IF NOT EXISTS `techProyecto` (
  `idTech` int(11) NOT NULL,
  `idProyecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `techProyecto`
--

INSERT INTO `techProyecto` (`idTech`, `idProyecto`) VALUES
(3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia`
--

CREATE TABLE IF NOT EXISTS `tecnologia` (
  `idTecnologia` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(16) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`idTecnologia`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `tecnologia`
--

INSERT INTO `tecnologia` (`idTecnologia`, `nombre`) VALUES
(1, 'PHP'),
(2, 'C++'),
(3, 'Java'),
(4, 'C'),
(5, 'Android'),
(6, 'MySQL'),
(7, 'SQL Server'),
(8, 'Cassandra DB'),
(9, 'CSS'),
(10, 'HTML'),
(11, 'JavaScript'),
(12, 'Python');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
