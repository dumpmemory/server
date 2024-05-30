OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Se presentó una falla al borrar los mapeos.",
    "Failed to delete the server configuration" : "Se presentó una falla al borrar la configuración del servidor",
    "Invalid configuration: Anonymous binding is not allowed." : "Configuración inválida: La vinculación anónima no está permitida. ",
    "Valid configuration, connection established!" : "¡Configuración válida, conexión establecida!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Configuración válida, pero la vinculación falló. Por favor verifica la configuración del servidor y las credenciales.",
    "Invalid configuration. Please have a look at the logs for further details." : "Configuración inválida. Por favor verifica las bitácoras para más detalles.",
    "No action specified" : "No se ha especificado alguna acción",
    "No configuration specified" : "No se ha especificado una configuración",
    "No data specified" : "No se han especificado datos",
    "Invalid data specified" : "Datos especificados no válidos",
    " Could not set configuration %s" : "No fue posible establecer la configuración %s",
    "Action does not exist" : "La acción no existe",
    "Renewing …" : "Renovando ...",
    "Very weak password" : "Contraseña muy debil",
    "Weak password" : "Contraseña débil",
    "So-so password" : "Contraseña aceptable",
    "Good password" : "Buena contraseña",
    "Strong password" : "Contraseña fuerte",
    "The Base DN appears to be wrong" : "El DN Base parece estar incorrecto",
    "Testing configuration…" : "Probando configuración... ",
    "Configuration incorrect" : "Configuración Incorrecta",
    "Configuration incomplete" : "Configuración incompleta",
    "Configuration OK" : "Configuración correcta",
    "Select groups" : "Seleccionar grupos",
    "Select object classes" : "Seleccionar las clases de objeto",
    "Please check the credentials, they seem to be wrong." : "Por favor verifica tus credenciales, al parecer están equivocadas.",
    "Please specify the port, it could not be auto-detected." : "No fue posible auto-detectar el puerto, por favor especifícalo.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "No fue posible auto detectar el DN Base, por favor verifica las credenciales, servidor y puerto.",
    "Could not detect Base DN, please enter it manually." : "No fue posible detectar el DN Base, por favor ingreésalo manualmente.",
    "{nthServer}. Server" : "{nthServer}. Servidor",
    "No object found in the given Base DN. Please revise." : "No fue posible encontrar ningún objeto en el DN Base dado. Por favor verifica.",
    "More than 1,000 directory entries available." : "Se encuentran disponibles más de 1,000 elementos de directoiros. ",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} registro disponible dentro del DN base proporcionado","{objectsFound} registros disponibles dentro del DN base proporcionado","{objectsFound} registros disponibles dentro del DN base proporcionado"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Se presentó un error. Por favor verifica la DN Base, así como las configuraciones de la conexión y las credenciales.",
    "Do you really want to delete the current Server Configuration?" : "¿Realmente deseas eliminar la configuración actual del servidor?",
    "Confirm Deletion" : "Confirmar el borrado",
    "Mappings cleared successfully!" : "¡Los mapeos se borraron exitosamente!",
    "Error while clearing the mappings." : "Se presentó un error al borrar los mapeos. ",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "La vinculación anónima no está permitida. Por favor proporciona un Usuario DN y una Contaseña.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Error de Operaciones LDAP. Las vinculaciones anónimas pueden no estar permitidas. ",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Se presentó una falla en el guardado. Por favor verifica que la base de datos esté operando. Vuelve a cargar antes de continuar. ",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Cambiar la modalidad habilitará las consultas automaticas de LDAP. Dependiendo del tamaño de su LDAP esto puede tomar algun tiempo. ¿Aún desea cambiar la modalidad?",
    "Mode switch" : "Cambio de modo",
    "Select attributes" : "Seleccionar atributos",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Usuario no encontrado. Por favor verifica tus atributos de inicio de sesión y tu usuario. Filtro aplicado (para copiar-y-pegar para una validación de línea de comando): <br/>",
    "User found and settings verified." : "Usuario encontrado y configuraciones verificadas. ",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Considera refinar la búsqueda, ya que abarca demasiados usuarios y solo el primero de ellos podrá iniciar sesión. ",
    "An unspecified error occurred. Please check log and settings." : "Se presentó un error inesperado. Por fvor verifica la bitácora y las configuraciones.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "El filtro de la búsqueda es inválido, posiblemente debido a temas de sintaxis como un número diferente de corchetes abiertos y cerrados. Por favor verifícalo. ",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "Se produjo un error de conexión con LDAP/AD. Por favor, verifica el host, el puerto y las credenciales.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "Falta el marcador de posición \"%uid\". Se reemplazará con el nombre de inicio de sesión al consultar LDAP/AD.",
    "Please provide a login name to test against" : "Favor de proporcionar un nombre de usuario contra el cual probar",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "El cuadro de grupo está deshabilitado porque el servidor LDAP/AD no admite memberOf.",
    "Password change rejected. Hint: " : "Cambio de contraseña rechazado. Pista: ",
    "Please login with the new password" : "Por favor inicia sesion con la nueva contraseña",
    "LDAP User backend" : "Backend de usuario LDAP",
    "Your password will expire tomorrow." : "Tu contraseña expirará mañana.",
    "Your password will expire today." : "Tu contraseña expirará el día de hoy. ",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["La contraseña expirará dentro de %n día. ","La contraseña expirará dentro de %n días. ","La contraseña expirará dentro de %n días. "],
    "LDAP/AD integration" : "Integración LDAP/AD",
    "_%n group found_::_%n groups found_" : ["%n grupo encontrado","%n grupos encontrados","%n grupos encontrados"],
    "> 1000 groups found" : "Se encontraron más de 1000 grupos",
    "> 1000 users found" : "Se encontraron más de 1000 usuarios",
    "_%n user found_::_%n users found_" : ["%n usuario encontrado","%n usuarios encontrados","%n usuarios encontrados"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "No fue posible detectar el atributo del nombre a desplegar del usuario. Por favor especifícalo tú mismo en las configuraciones avanzadas de LDAP. ",
    "Could not find the desired feature" : "No fue posible encontrar la función deseada.",
    "Invalid Host" : "Servidor inválido",
    "LDAP user and group backend" : "Backend de LDAP para usuario y grupo",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Esta aplicación permite a los administradores conectar Nextcloud a un directorio de usuarios basado en LDAP.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Esta aplicación permite a los administradores conectar Nextcloud a un directorio de usuarios basado en LDAP para autenticación y provisión de usuarios, grupos y atributos de usuarios. Los administradores pueden configurar esta aplicación para conectarse a uno o más directorios LDAP o Active Directory a través de una interfaz LDAP. Atributos como la cuota de usuario, el correo electrónico, las imágenes de avatar, las membresías de grupo y más se pueden extraer en Nextcloud desde un directorio con las consultas y filtros adecuados.\n      \n      Un usuario inicia sesión en Nextcloud con sus credenciales de LDAP o AD y se le concede acceso en función de una solicitud de autenticación gestionada por el servidor LDAP o AD. Nextcloud no almacena contraseñas de LDAP o AD, en su lugar, estas credenciales se utilizan para autenticar a un usuario y luego Nextcloud utiliza una sesión para el ID de usuario. Obtén más información en la documentación de Backend de Usuarios y Grupos LDAP.",
    "Test Configuration" : "Probar configuración",
    "Help" : "Ayuda",
    "Groups meeting these criteria are available in %s:" : "Los grupos que cumplen con los siguientes criterios están disponibles en %s:",
    "Only these object classes:" : "Sólo estas clases de objetos:",
    "Only from these groups:" : "Sólo desde estos grupos:",
    "Search groups" : "Buscar grupos",
    "Available groups" : "Grupos disponibles",
    "Selected groups" : "Grupos seleccionados",
    "Edit LDAP Query" : "Editar consulta a LDAP",
    "LDAP Filter:" : "Filtro de LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "El filtro especifica cuales grupos LDAP tendrán acceso a la instancia %s.",
    "Verify settings and count the groups" : "Verificar las configuraciones y contar los grupos",
    "When logging in, %s will find the user based on the following attributes:" : "Al iniciar sesion, %s encontrará al usuario con base en los siguientes atributos:",
    "LDAP/AD Username:" : "Usuario LDAP/AD:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Permite iniciar sesión con el nombre de usuario LDAP/AD, que es \"uid\" o \"sAMAccountName\" y se detectará automáticamente.",
    "LDAP/AD Email Address:" : "Dirección de correo electrónico LDAP/AD:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Permite iniciar sesión contra el atributo de email. \"mail\" y \"mailPrimaryAddresw\" está permitido. ",
    "Other Attributes:" : "Otros atributos:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Define el filtro a aplicar cuando se intenta iniciar sesión. \"%% uid\" remplaza el usuario en la acción de inicio de sesión. Ejemplo: \"uid=%% uid\"",
    "Test Loginname" : "Probar nombre de usuario",
    "Attempts to receive a DN for the given loginname and the current login filter" : "Intenta obtener un DN para el nombre de inicio de sesión y el filtro de inicio de sesión actual",
    "Verify settings" : "Verificar configuraciones ",
    "%s. Server:" : "%s. Servidor:",
    "Add a new configuration" : "Agregar una nueva configuración",
    "Copy current configuration into new directory binding" : "Copiar la configuración actual a un nuevo directorio de vinculación",
    "Delete the current configuration" : "Borrar la configuración actual",
    "Host" : "Servidor",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Puedes omitir el protocolo, a menos que requiera SSL. Si es el caso, empieza con ldaps://",
    "Port" : "Puerto",
    "Detect Port" : "Detectar Puerto",
    "User DN" : "DN del usuario",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "El DN del cliente del usuario con el que se vinculará, ejem. uid=agente,dc=ejemplo,dc=com. Para tener un acceso anónimo, deja el DN y la contraseña vacíos.",
    "Password" : "Contraseña",
    "For anonymous access, leave DN and Password empty." : "Para acceso anónimo, deja la contraseña y DN vacíos.",
    "Save Credentials" : "Guardar credenciales",
    "One Base DN per line" : "Un DN Base por línea",
    "You can specify Base DN for users and groups in the Advanced tab" : "Puedes especificar el DN Base para usuarios y grupos en la pestaña Avanzado",
    "Detect Base DN" : "Detectar DN Base",
    "Test Base DN" : "Probar el DN Base",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Evita solicitudes automaticas de LDAP. Es mejor para ambientes más grandes pero requiere mayor conocimiento de LDAP. ",
    "Manually enter LDAP filters (recommended for large directories)" : "Ingresar los filtros LDAP manualmente (recomendado para directorios grandes)",
    "Listing and searching for users is constrained by these criteria:" : "Los enlistados y las busquedas para los usuarios están acotados por estos criterios:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Las clases de objetos más comunes para usuarios son organizationalPerson, person, user, and inetOrgPerson. Si no estás seguro de cuál clase de objeto selecciónar, por favor consulta tu directorio admin.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "El filtro especifica cuáles usuarios LDAP tendrán acceso a la instancia %s.",
    "Verify settings and count users" : "Verificar configuraciones y contar ususarios",
    "Saving" : "Guardando",
    "Back" : "Atrás",
    "Continue" : "Continuar",
    "Please renew your password." : "Por favor renueva tu contraseña.",
    "An internal error occurred." : "Se presentó un error interno. ",
    "Please try again or contact your administrator." : "Por favor inténtarlo de nuevo o contacta a tu administrador. ",
    "Current password" : "Contraseña actual",
    "New password" : "Nueva contraseña",
    "Renew password" : "Renovar contraseña",
    "Wrong password." : "Contraseña incorrecta. ",
    "Cancel" : "Cancelar",
    "Server" : "Servidor",
    "Users" : "Usuarios",
    "Login Attributes" : "Atributos de Inicio de Sesión",
    "Groups" : "Grupos",
    "Expert" : "Experto",
    "Advanced" : "Avanzado",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Advertencia:</b> El módulo LDAP de PHP no está instalado, el backend no funcionará. Por favor solicita su instalación a tu administrador del sistema.",
    "Connection Settings" : "Configuraciones de la conexión",
    "Configuration Active" : "Configuracion Activa",
    "When unchecked, this configuration will be skipped." : "Cuando no esté seleccionada, esta configuración será omitida.",
    "Backup (Replica) Host" : "Servidor de copia de seguridad (Replica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Por favor proporciona un servidor de copia de seguridad opcional. Debe ser una réplica del servidor LDAP / AD principal.",
    "Backup (Replica) Port" : "Puerto para copias de seguridad (Réplica)",
    "Disable Main Server" : "Deshabilitar servidor principal",
    "Only connect to the replica server." : "Sólo contectarse al servidor de réplica.",
    "Turn off SSL certificate validation." : "Deshabilitar la validación del certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "¡No se recomienda, úsalo únicamente para pruebas! Si la conexión sólo funciona con esta opción, importa el certificado SSL del servidor LDAP a tu servidor %s.",
    "Cache Time-To-Live" : "Tiempo de vida del caché",
    "in seconds. A change empties the cache." : "en segundos. Un cambio vacía la caché.",
    "Directory Settings" : "Configuraciones del directorio",
    "User Display Name Field" : "Campo de Nombre a Desplegar del Usuario",
    "The LDAP attribute to use to generate the user's display name." : "El atributo LDAP a usar para generar el nombre del usuario a desplegar.",
    "2nd User Display Name Field" : "2do Campo de Nombre a Desplegar del Usuario",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Opcional. Un atributo LDAP puede ser agregado al nombre a despelegar entre corchetes. Ejemplos de resultados »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "Árbol de Usuario Base",
    "One User Base DN per line" : "Un Usuario Base de DN por línea",
    "User Search Attributes" : "Atributos de búsqueda de usuario",
    "Optional; one attribute per line" : "Opcional; un atributo por línea",
    "Disable users missing from LDAP" : "Deshabilitar usuarios ausentes en LDAP",
    "When switched on, users imported from LDAP which are then missing will be disabled" : "Cuando está activado, los usuarios importados de LDAP que luego estén ausentes se desactivarán",
    "Group Display Name Field" : "Campo de Nombre de Grupo a Desplegar",
    "The LDAP attribute to use to generate the groups's display name." : "El atributo LDAP a usar para generar el nombre para mostrar del grupo.",
    "Base Group Tree" : "Árbol base de grupo",
    "One Group Base DN per line" : "Un DN Base de Grupo por línea",
    "Group Search Attributes" : "Atributos de Búsqueda de Grupo",
    "Group-Member association" : "Asociación Grupo-Miembro",
    "Dynamic Group Member URL" : "URL Dinámico de Miembro de Grupo ",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "El atributo de LDAP que, en objetos de grupo, contiene una URL de búsqueda LDAP que determina cuáles objetos pertenecen al grupo. (Un ajuste vacío deshabilita la funcionalidad de membrecía de grupo dinámica.)",
    "Nested Groups" : "Grupos Anidados",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Cuando está activado, los grupos que contengan grupos están soportados. (Sólo funciona si el atributo de miembro de grupo contiene los DNs). ",
    "Paging chunksize" : "Tamaño del chunk de paginación",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "El tamaño de chunk usado para las búsquedas con paginación de LDAP puede regresar resuldados volumniosos tales como enumeraciones de usuarios o grupos. (Establecerlo a 0 deshabilita las búsquedas con paginación en estos casos). ",
    "Enable LDAP password changes per user" : "Habilitar cambio de contraseñas en LDAP por el usuario",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Permitir que los usuarios LDAP puedan cambiar su contraseña y permitir a  los Super Administradortes y Administradores de grupo cambiar  la contraseña de sus usuarios LDAP. Únicamente funciona cuando la configuración de las poiíticas de control de acceso en el servidor LDAP está alineada. Como las contraseñas son enviadas en texto plano al servidor LDAP, se debe usar encripción en el transporte y del mismo modo se debe configurar el uso de funciones de resumen en el servidor LDAP",
    "(New password is sent as plain text to LDAP)" : "(La nueva contraseña se envía como texto plano a LDAP)",
    "Default password policy DN" : "DN de la política predeterminada de contraseñas",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "El DN de la política de contraseñas predeterminada que será usada para el manejo de expiración de contraseñas. Sólo funciona cuando está habilitado el cambio de contraseñas por el usuario y sólo está soportado para OpenLDAP. Déjalo en blanco para deshabilitar el manejo de expiración de contraseñas.",
    "Special Attributes" : "Atributos Especiales",
    "Quota Field" : "Campo de cuota",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Dejar en blanco para usar la cuota predeterminada del usuario. En caso contrario, por favor especifica el atributo LDAP / AD.",
    "Quota Default" : "Cuota predeterminada",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Anular la cuota predeterminada para usuarios LDAP que no tienen una cuota establecida en el Campo Cuota. ",
    "Email Field" : "Campo de correo electrónico",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Establecer el correo electrónico del usuario con base en el atributo LDAP. Déjalo vacío para el comportamiento predeterminado. ",
    "User Home Folder Naming Rule" : "Regla de Nomenclatura para la Carpeta Inicio del Usuario",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Déjalo vacío para el nombre de usuario (predeterminado). De lo contrario, especifica un atributo LDAP/AD.",
    "\"$home\" Placeholder Field" : "Campo de marcador de posición \"$home\"",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$home en una configuración de almacenamiento externo se reemplazará con el valor del atributo especificado",
    "User Profile Attributes" : "Atributos del perfil de usuario",
    "Phone Field" : "Campo de teléfono",
    "User profile Phone will be set from the specified attribute" : "El perfil de usuario Teléfono se establecerá a partir del atributo especificado",
    "Website Field" : "Campo de sitio web",
    "User profile Website will be set from the specified attribute" : "El perfil de usuario Sitio web se establecerá a partir del atributo especificado",
    "Address Field" : "Campo de dirección",
    "User profile Address will be set from the specified attribute" : "El perfil de usuario Dirección se establecerá a partir del atributo especificado",
    "Twitter Field" : "Campo de Twitter",
    "User profile Twitter will be set from the specified attribute" : "El perfil de usuario Twitter se establecerá a partir del atributo especificado",
    "Fediverse Field" : "Campo de Fediverse",
    "User profile Fediverse will be set from the specified attribute" : "El perfil de usuario Fediverse se establecerá a partir del atributo especificado",
    "Organisation Field" : "Campo de organización",
    "User profile Organisation will be set from the specified attribute" : "El perfil de usuario Organización se establecerá a partir del atributo especificado",
    "Role Field" : "Campo de rol",
    "User profile Role will be set from the specified attribute" : "El perfil de usuario Rol se establecerá a partir del atributo especificado",
    "Headline Field" : "Campo de titular",
    "User profile Headline will be set from the specified attribute" : "El perfil de usuario Titular se establecerá a partir del atributo especificado",
    "Biography Field" : "Campo de biografía",
    "User profile Biography will be set from the specified attribute" : "El perfil de usuario Biografía se establecerá a partir del atributo especificado",
    "Internal Username" : "Usuario interno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "De forma predeterminada, el nombre de usuario interno se creará a partir del atributo UUID. Se asegura de que el nombre de usuario sea único y no se necesite convertir caracteres. El nombre de usuario interno tiene la restricción de que solo se permiten estos caracteres: [a-zA-Z0-9_.@-]. Otros caracteres se reemplazan por su correspondencia ASCII o simplemente se omiten. En caso de colisiones, se agregará/aumentará un número. El nombre de usuario interno se utiliza para identificar a un usuario internamente. También es el nombre predeterminado para la carpeta de inicio de usuario. También es parte de las URL remotas, por ejemplo, para todos los servicios DAV. Con esta configuración, se puede anular el comportamiento predeterminado. Los cambios solo tendrán efecto en los usuarios LDAP mapeados (añadidos) recientemente. Déjalo vacío para el comportamiento predeterminado.",
    "Internal Username Attribute:" : "Atributo de nombre de usuario Interno:",
    "Override UUID detection" : "Anular la detección UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por defecto, el atributo UUID se detecta automáticamente. Este atributo se usa para identificar, sin ninguna duda, a usuarios y grupos LDAP. Adicionalmente, el usuario interno se creará con base en el UUID, si no ha sido especificado otro comportamiento en la parte de arriba. Puedes anular la configuración y proporcionar el atributo que quieras. Debes asegurarte de que el atributo que quieres sea accesible por los usuarios y grupos y que sea único. Mantenlo vacío para tener el comportamiento predeterminado. Los cambios surtirán efecto sólo en los usuarios y grupos mapeados (agregados) nuevos a LDAP.",
    "UUID Attribute for Users:" : "Atributo UUID para Usuarios:",
    "UUID Attribute for Groups:" : "Atributo UUID para Grupos:",
    "Username-LDAP User Mapping" : "Mapeo del Usuario al Usuario LDAP",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Los nombres de usuarios son usados para almacenar y asignar metadatos. Para poder identificar y reconocer usuarios con precisión, cada usuario LDAP tendrá un nombre de usuario interno. Esto requiere una correspondencia de nombre de usuario a usuario LDAP. El nombre de usuario creado tiene una correspondencia al UUID del usuario LDAP. Adicionalmente, también se manda a cache el DN para reducir las interacciones con LDAP, pero no se usa para identificación. Si el DN cambia, los cambios serán encontrados. El nombre de usuario interno se usa intensivamente. Limpiar las correspondencias dejará restos en muhcos logares. ¡Limpiar las correspondencias no es sensitivo a la configuración, afecta a todas las configuraciones LDAP! Nunca limpies las correspondencias en un ambiente de producción, solo hazlo en los ambientes de pruebas o experimentación.",
    "Clear Username-LDAP User Mapping" : "Borrar el mapeo de los Usuarios a los Usuarios-LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Borrar el mapeo de los Nombres de grupo a los grupos-LDAP",
    "Invalid UUIDs of LDAP users or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "Se encontraron UUID no válidos de usuarios o grupos de LDAP. Revisa la configuración de \"Anulación de detección de UUID\" en la sección de Expertos de la configuración de LDAP y usa \"occ ldap:update-uuid\" para actualizarlos."
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
