import type { SyllabusFile } from "../../../types/quiz.types.js";

export const science_physicsSyllabus: SyllabusFile = {
  metadata: {
    country: "Nepal",
    curriculum: "NEB",
    subject: "Physics",
    grades: [11, 12],
    language: "English",
    formatVersion: "1.0",
    description: "Chapter-wise Physics topic map with individual topic arrays",
    note: "Verify chapter titles and topic coverage against the latest official NEB curriculum.",
    subjectCode: "PHY",
  },
  grades: {
    "11": {
      id: "PHY11",
      grade: 11,
      subject: "Physics",
      branches: [
        {
          id: "PHY11-B01",
          branchNumber: 1,
          branchName: "Mechanics",
          chapters: [
            {
              id: "PHY11-CH01",
              chapterNumber: 1,
              chapterName: "Physical Quantities",
              topics: [
                {
                  id: "PHY11-CH01-T01",
                  topicNumber: 1,
                  topic: "Physical quantities",
                  brief:
                    "Physical quantities are measurable properties of objects or phenomena expressed using a numerical value and a unit.",
                },
                {
                  id: "PHY11-CH01-T02",
                  topicNumber: 2,
                  topic: "Fundamental and derived quantities",
                  brief:
                    "Fundamental quantities are independent physical quantities, while derived quantities are obtained by combining fundamental quantities mathematically.",
                },
                {
                  id: "PHY11-CH01-T03",
                  topicNumber: 3,
                  topic: "SI units",
                  brief:
                    "The International System of Units (SI) provides standardized units for measuring physical quantities worldwide.",
                },
                {
                  id: "PHY11-CH01-T04",
                  topicNumber: 4,
                  topic: "Systems of units",
                  brief:
                    "Systems of units are organized sets of standard units used to measure physical quantities, such as SI and CGS.",
                },
                {
                  id: "PHY11-CH01-T05",
                  topicNumber: 5,
                  topic: "Dimensions of physical quantities",
                  brief:
                    "Dimensions describe the dependence of a physical quantity on fundamental quantities such as mass, length, and time.",
                },
                {
                  id: "PHY11-CH01-T06",
                  topicNumber: 6,
                  topic: "Dimensional formulae",
                  brief:
                    "Dimensional formulae express physical quantities as powers of fundamental dimensions, helping identify their physical relationships.",
                },
                {
                  id: "PHY11-CH01-T07",
                  topicNumber: 7,
                  topic: "Dimensional analysis",
                  brief:
                    "Dimensional analysis examines the dimensions of physical quantities to check equations and determine possible relationships between variables.",
                },
                {
                  id: "PHY11-CH01-T08",
                  topicNumber: 8,
                  topic: "Applications of dimensional analysis",
                  brief:
                    "Dimensional analysis helps verify equations, derive relationships between physical quantities, and convert measurements between compatible unit systems.",
                },
                {
                  id: "PHY11-CH01-T09",
                  topicNumber: 9,
                  topic: "Significant figures",
                  brief:
                    "Significant figures indicate the meaningful digits in a measured or calculated value, reflecting its reported precision.",
                },
                {
                  id: "PHY11-CH01-T10",
                  topicNumber: 10,
                  topic: "Measurement errors",
                  brief:
                    "Measurement errors are differences between measured and reference values, arising from instrumental, observational, or environmental factors.",
                },
                {
                  id: "PHY11-CH01-T11",
                  topicNumber: 11,
                  topic: "Accuracy and precision",
                  brief:
                    "Accuracy describes closeness to the true or accepted value, while precision describes the consistency of repeated measurements.",
                },
                {
                  id: "PHY11-CH01-T12",
                  topicNumber: 12,
                  topic: "Scientific notation",
                  brief:
                    "Scientific notation represents very large or small numbers as a coefficient multiplied by a power of ten.",
                },
                {
                  id: "PHY11-CH01-T13",
                  topicNumber: 13,
                  topic: "Order of magnitude",
                  brief:
                    "Order of magnitude expresses the approximate scale of a quantity using the nearest relevant power of ten.",
                },
              ],
            },
            {
              id: "PHY11-CH02",
              chapterNumber: 2,
              chapterName: "Vectors",
              topics: [
                {
                  id: "PHY11-CH02-T01",
                  topicNumber: 1,
                  topic: "Scalar and vector quantities",
                  brief:
                    "Scalars have magnitude only, whereas vectors have both magnitude and direction, such as mass and displacement respectively.",
                },
                {
                  id: "PHY11-CH02-T02",
                  topicNumber: 2,
                  topic: "Representation of vectors",
                  brief:
                    "Vectors are commonly represented by directed line segments, where the length indicates magnitude and the arrow indicates direction.",
                },
                {
                  id: "PHY11-CH02-T03",
                  topicNumber: 3,
                  topic: "Vector notation",
                  brief:
                    "Vector notation uses symbols such as bold letters or arrows above letters to distinguish vectors from scalar quantities.",
                },
                {
                  id: "PHY11-CH02-T04",
                  topicNumber: 4,
                  topic: "Types of vectors",
                  brief:
                    "Vectors are classified into types such as unit, zero, equal, negative, parallel, and position vectors according to their properties.",
                },
                {
                  id: "PHY11-CH02-T05",
                  topicNumber: 5,
                  topic: "Vector addition",
                  brief:
                    "Vector addition combines two or more vectors to obtain a resultant vector using geometric or component-based methods.",
                },
                {
                  id: "PHY11-CH02-T06",
                  topicNumber: 6,
                  topic: "Triangle law of vector addition",
                  brief:
                    "The triangle law adds two vectors by placing the tail of the second at the head of the first; the resultant joins the starting and ending points.",
                },
                {
                  id: "PHY11-CH02-T07",
                  topicNumber: 7,
                  topic: "Parallelogram law of vector addition",
                  brief:
                    "The parallelogram law finds the resultant of two vectors represented by adjacent sides of a parallelogram using its diagonal.",
                },
                {
                  id: "PHY11-CH02-T08",
                  topicNumber: 8,
                  topic: "Polygon law of vector addition",
                  brief:
                    "The polygon law determines the resultant of several vectors arranged head-to-tail, from the first tail to the final head.",
                },
                {
                  id: "PHY11-CH02-T09",
                  topicNumber: 9,
                  topic: "Resolution of vectors",
                  brief:
                    "Resolution of vectors separates a vector into components along chosen directions, often perpendicular axes.",
                },
                {
                  id: "PHY11-CH02-T10",
                  topicNumber: 10,
                  topic: "Rectangular components of vectors",
                  brief:
                    "Rectangular components are perpendicular vector components, usually along the x- and y-axes, whose sum reproduces the original vector.",
                },
                {
                  id: "PHY11-CH02-T11",
                  topicNumber: 11,
                  topic: "Unit vectors",
                  brief:
                    "A unit vector has magnitude one and specifies direction, commonly represented along coordinate axes by symbols such as i, j, and k.",
                },
                {
                  id: "PHY11-CH02-T12",
                  topicNumber: 12,
                  topic: "Vector subtraction",
                  brief:
                    "Vector subtraction is performed by adding the negative of the vector being subtracted to the first vector.",
                },
                {
                  id: "PHY11-CH02-T13",
                  topicNumber: 13,
                  topic: "Scalar product of vectors",
                  brief:
                    "The scalar product, or dot product, multiplies vector magnitudes by the cosine of their included angle to produce a scalar.",
                },
                {
                  id: "PHY11-CH02-T14",
                  topicNumber: 14,
                  topic: "Vector product of vectors",
                  brief:
                    "The vector product, or cross product, produces a vector perpendicular to two input vectors, with magnitude determined by the sine of their included angle.",
                },
                {
                  id: "PHY11-CH02-T15",
                  topicNumber: 15,
                  topic: "Applications of vectors in physics",
                  brief:
                    "Vectors describe directional quantities such as displacement, velocity, acceleration, force, and momentum, enabling calculations in mechanics.",
                },
              ],
            },
            {
              id: "PHY11-CH03",
              chapterNumber: 3,
              chapterName: "Kinematics",
              topics: [
                {
                  id: "PHY11-CH03-T01",
                  topicNumber: 1,
                  topic: "Rest and motion",
                  brief:
                    "An object is at rest or in motion depending on whether its position changes with time relative to a chosen reference.",
                },
                {
                  id: "PHY11-CH03-T02",
                  topicNumber: 2,
                  topic: "Reference frames",
                  brief:
                    "A reference frame provides the coordinate system and observer relative to which an object's position and motion are described.",
                },
                {
                  id: "PHY11-CH03-T03",
                  topicNumber: 3,
                  topic: "Distance and displacement",
                  brief:
                    "Distance is the total path length travelled, while displacement is the directed change from initial to final position.",
                },
                {
                  id: "PHY11-CH03-T04",
                  topicNumber: 4,
                  topic: "Speed and velocity",
                  brief:
                    "Speed measures distance travelled per unit time, whereas velocity measures displacement per unit time and includes direction.",
                },
                {
                  id: "PHY11-CH03-T05",
                  topicNumber: 5,
                  topic: "Acceleration",
                  brief:
                    "Acceleration is the rate of change of velocity with time, including changes in speed, direction, or both.",
                },
                {
                  id: "PHY11-CH03-T06",
                  topicNumber: 6,
                  topic: "Uniform and non-uniform motion",
                  brief:
                    "Uniform motion maintains constant velocity, while non-uniform motion involves changes in velocity over time.",
                },
                {
                  id: "PHY11-CH03-T07",
                  topicNumber: 7,
                  topic: "Equations of motion",
                  brief:
                    "Equations of motion relate displacement, initial velocity, final velocity, acceleration, and time for motion with constant acceleration.",
                },
                {
                  id: "PHY11-CH03-T08",
                  topicNumber: 8,
                  topic: "Motion graphs",
                  brief:
                    "Motion graphs represent how quantities such as position, velocity, and acceleration change with time, helping analyze an object's movement.",
                },
                {
                  id: "PHY11-CH03-T09",
                  topicNumber: 9,
                  topic: "Position-time graphs",
                  brief:
                    "A position-time graph shows how position changes with time, and its slope represents velocity.",
                },
                {
                  id: "PHY11-CH03-T10",
                  topicNumber: 10,
                  topic: "Velocity-time graphs",
                  brief:
                    "A velocity-time graph shows velocity variation with time; its slope gives acceleration and its signed area gives displacement.",
                },
                {
                  id: "PHY11-CH03-T11",
                  topicNumber: 11,
                  topic: "Acceleration-time graphs",
                  brief:
                    "An acceleration-time graph shows acceleration over time, and the signed area under the graph gives the change in velocity.",
                },
                {
                  id: "PHY11-CH03-T12",
                  topicNumber: 12,
                  topic: "Free fall",
                  brief:
                    "Free fall is motion under gravity alone, neglecting air resistance, with acceleration approximately equal to gravitational acceleration near Earth's surface.",
                },
                {
                  id: "PHY11-CH03-T13",
                  topicNumber: 13,
                  topic: "Motion under gravity",
                  brief:
                    "Motion under gravity describes the movement of objects influenced by gravitational acceleration, such as falling or vertically projected bodies.",
                },
                {
                  id: "PHY11-CH03-T14",
                  topicNumber: 14,
                  topic: "Projectile motion",
                  brief:
                    "Projectile motion combines horizontal motion at constant velocity with vertical motion under gravity, producing a parabolic path when air resistance is neglected.",
                },
                {
                  id: "PHY11-CH03-T15",
                  topicNumber: 15,
                  topic: "Horizontal projectile",
                  brief:
                    "A horizontal projectile is launched horizontally and follows a curved path as gravity accelerates it vertically while horizontal velocity remains constant.",
                },
                {
                  id: "PHY11-CH03-T16",
                  topicNumber: 16,
                  topic: "Oblique projectile",
                  brief:
                    "An oblique projectile is launched at an angle to the horizontal, producing horizontal and vertical velocity components that determine its trajectory.",
                },
                {
                  id: "PHY11-CH03-T17",
                  topicNumber: 17,
                  topic: "Time of flight",
                  brief:
                    "Time of flight is the total time a projectile remains in the air before reaching its landing level.",
                },
                {
                  id: "PHY11-CH03-T18",
                  topicNumber: 18,
                  topic: "Maximum height",
                  brief:
                    "Maximum height is the greatest vertical displacement reached by a projectile, occurring when its vertical velocity becomes zero.",
                },
                {
                  id: "PHY11-CH03-T19",
                  topicNumber: 19,
                  topic: "Horizontal range",
                  brief:
                    "Horizontal range is the horizontal distance travelled by a projectile from launch to landing, determined by its launch conditions and gravity.",
                },
                {
                  id: "PHY11-CH03-T20",
                  topicNumber: 20,
                  topic: "Relative velocity",
                  brief:
                    "Relative velocity describes the velocity of one object as observed from another moving object or reference frame.",
                },
              ],
            },
            {
              id: "PHY11-CH04",
              chapterNumber: 4,
              chapterName: "Dynamics",
              topics: [
                {
                  id: "PHY11-CH04-T01",
                  topicNumber: 1,
                  topic: "Force and inertia",
                  brief:
                    "Force is an interaction that can change an object's motion, while inertia is its resistance to changes in its state of motion.",
                },
                {
                  id: "PHY11-CH04-T02",
                  topicNumber: 2,
                  topic: "Newton's first law of motion",
                  brief:
                    "Newton's first law states that an object remains at rest or in uniform straight-line motion unless acted upon by a net external force.",
                },
                {
                  id: "PHY11-CH04-T03",
                  topicNumber: 3,
                  topic: "Newton's second law of motion",
                  brief:
                    "Newton's second law states that the net force equals the rate of change of momentum and, for constant mass, equals mass times acceleration.",
                },
                {
                  id: "PHY11-CH04-T04",
                  topicNumber: 4,
                  topic: "Newton's third law of motion",
                  brief:
                    "Newton's third law states that interacting bodies exert equal and opposite forces on each other.",
                },
                {
                  id: "PHY11-CH04-T05",
                  topicNumber: 5,
                  topic: "Momentum",
                  brief:
                    "Linear momentum is the product of an object's mass and velocity, describing its quantity of motion and direction.",
                },
                {
                  id: "PHY11-CH04-T06",
                  topicNumber: 6,
                  topic: "Impulse",
                  brief:
                    "Impulse is the product of a constant force and the time interval over which it acts, and equals the change in momentum.",
                },
                {
                  id: "PHY11-CH04-T07",
                  topicNumber: 7,
                  topic: "Conservation of linear momentum",
                  brief:
                    "The principle of conservation of linear momentum states that total momentum remains constant in an isolated system with zero net external force.",
                },
                {
                  id: "PHY11-CH04-T08",
                  topicNumber: 8,
                  topic: "Applications of Newton's laws",
                  brief:
                    "Newton's laws explain everyday and mechanical phenomena such as walking, vehicle acceleration, recoil, and the motion of connected objects.",
                },
                {
                  id: "PHY11-CH04-T09",
                  topicNumber: 9,
                  topic: "Free-body diagrams",
                  brief:
                    "A free-body diagram isolates an object and displays all external forces acting on it using labelled arrows.",
                },
                {
                  id: "PHY11-CH04-T10",
                  topicNumber: 10,
                  topic: "Mass and weight",
                  brief:
                    "Mass measures inertia and remains constant for an object, while weight is the gravitational force acting on it.",
                },
                {
                  id: "PHY11-CH04-T11",
                  topicNumber: 11,
                  topic: "Normal reaction",
                  brief:
                    "The normal reaction is the contact force exerted by a surface perpendicular to the surface at the point of contact.",
                },
                {
                  id: "PHY11-CH04-T12",
                  topicNumber: 12,
                  topic: "Tension",
                  brief:
                    "Tension is the pulling force transmitted through a taut string, rope, or cable when it is under load.",
                },
                {
                  id: "PHY11-CH04-T13",
                  topicNumber: 13,
                  topic: "Friction",
                  brief:
                    "Friction is a contact force that opposes relative motion or the tendency of relative motion between touching surfaces.",
                },
                {
                  id: "PHY11-CH04-T14",
                  topicNumber: 14,
                  topic: "Static friction",
                  brief:
                    "Static friction prevents surfaces from beginning to slide and adjusts up to a maximum value determined by the surfaces and normal force.",
                },
                {
                  id: "PHY11-CH04-T15",
                  topicNumber: 15,
                  topic: "Kinetic friction",
                  brief:
                    "Kinetic friction acts between sliding surfaces and is often approximated as proportional to the normal reaction.",
                },
                {
                  id: "PHY11-CH04-T16",
                  topicNumber: 16,
                  topic: "Coefficient of friction",
                  brief:
                    "The coefficient of friction is a dimensionless ratio relating frictional force to normal reaction under specified contact conditions.",
                },
                {
                  id: "PHY11-CH04-T17",
                  topicNumber: 17,
                  topic: "Motion on inclined planes",
                  brief:
                    "Motion on an inclined plane is analyzed by resolving gravitational force into components parallel and perpendicular to the slope.",
                },
                {
                  id: "PHY11-CH04-T18",
                  topicNumber: 18,
                  topic: "Connected bodies",
                  brief:
                    "Connected-body problems examine the motion of objects linked by strings or other constraints, using force equations and shared acceleration conditions.",
                },
                {
                  id: "PHY11-CH04-T19",
                  topicNumber: 19,
                  topic: "Circular motion and centripetal force",
                  brief:
                    "Circular motion requires an inward net force called centripetal force to continuously change the direction of an object's velocity.",
                },
              ],
            },
            {
              id: "PHY11-CH05",
              chapterNumber: 5,
              chapterName: "Work, Energy and Power",
              topics: [
                {
                  id: "PHY11-CH05-T01",
                  topicNumber: 1,
                  topic: "Work done by a constant force",
                  brief:
                    "Work done by a constant force equals the product of force, displacement, and the cosine of the angle between them.",
                },
                {
                  id: "PHY11-CH05-T02",
                  topicNumber: 2,
                  topic: "Work done by a variable force",
                  brief:
                    "Work done by a variable force is calculated by integrating the force component along the displacement over the path.",
                },
                {
                  id: "PHY11-CH05-T03",
                  topicNumber: 3,
                  topic: "Positive and negative work",
                  brief:
                    "Work is positive when force has a component along displacement and negative when its component acts opposite to displacement.",
                },
                {
                  id: "PHY11-CH05-T04",
                  topicNumber: 4,
                  topic: "Zero work",
                  brief:
                    "Zero work occurs when displacement is zero or when the force is perpendicular to displacement throughout the motion.",
                },
                {
                  id: "PHY11-CH05-T05",
                  topicNumber: 5,
                  topic: "Kinetic energy",
                  brief:
                    "Kinetic energy is the energy an object possesses because of its motion and, for a non-relativistic object, equals one-half its mass times speed squared.",
                },
                {
                  id: "PHY11-CH05-T06",
                  topicNumber: 6,
                  topic: "Work-energy theorem",
                  brief:
                    "The work-energy theorem states that the net work done on an object equals the change in its kinetic energy.",
                },
                {
                  id: "PHY11-CH05-T07",
                  topicNumber: 7,
                  topic: "Potential energy",
                  brief:
                    "Potential energy is stored energy associated with an object's position, configuration, or interaction with other objects.",
                },
                {
                  id: "PHY11-CH05-T08",
                  topicNumber: 8,
                  topic: "Gravitational potential energy",
                  brief:
                    "Gravitational potential energy is energy associated with position in a gravitational field; near Earth's surface, its change is approximately mgh.",
                },
                {
                  id: "PHY11-CH05-T09",
                  topicNumber: 9,
                  topic: "Elastic potential energy",
                  brief:
                    "Elastic potential energy is stored when an elastic object is stretched or compressed, such as a spring within its elastic limit.",
                },
                {
                  id: "PHY11-CH05-T10",
                  topicNumber: 10,
                  topic: "Conservative forces",
                  brief:
                    "A conservative force does path-independent work between two points, and its work around any closed path is zero.",
                },
                {
                  id: "PHY11-CH05-T11",
                  topicNumber: 11,
                  topic: "Non-conservative forces",
                  brief:
                    "Non-conservative forces, such as kinetic friction, perform work that depends on the path and can transform mechanical energy into other forms.",
                },
                {
                  id: "PHY11-CH05-T12",
                  topicNumber: 12,
                  topic: "Conservation of mechanical energy",
                  brief:
                    "Mechanical energy remains constant when only conservative forces do work, with kinetic and potential energy transforming into each other.",
                },
                {
                  id: "PHY11-CH05-T13",
                  topicNumber: 13,
                  topic: "Power",
                  brief:
                    "Power is the rate at which work is done or energy is transferred, measured in watts.",
                },
                {
                  id: "PHY11-CH05-T14",
                  topicNumber: 14,
                  topic: "Average and instantaneous power",
                  brief:
                    "Average power is work done divided by elapsed time, while instantaneous power describes the rate of energy transfer at a particular moment.",
                },
                {
                  id: "PHY11-CH05-T15",
                  topicNumber: 15,
                  topic: "Efficiency",
                  brief:
                    "Efficiency is the ratio of useful output energy or power to total input energy or power, usually expressed as a percentage.",
                },
                {
                  id: "PHY11-CH05-T16",
                  topicNumber: 16,
                  topic: "Applications of energy conservation",
                  brief:
                    "Energy conservation helps analyze systems such as falling objects, roller coasters, springs, and machines by tracking transfers between energy forms.",
                },
              ],
            },
            {
              id: "PHY11-CH06",
              chapterNumber: 6,
              chapterName: "Circular Motion",
              topics: [
                {
                  id: "PHY11-CH06-T01",
                  topicNumber: 1,
                  topic: "Angular displacement",
                  brief:
                    "Angular displacement measures the change in angular position of a rotating object, usually expressed in radians.",
                },
                {
                  id: "PHY11-CH06-T02",
                  topicNumber: 2,
                  topic: "Angular velocity",
                  brief:
                    "Angular velocity is the rate of change of angular displacement with time and specifies the direction of rotation.",
                },
                {
                  id: "PHY11-CH06-T03",
                  topicNumber: 3,
                  topic: "Angular acceleration",
                  brief:
                    "Angular acceleration is the rate of change of angular velocity with time during rotational motion.",
                },
                {
                  id: "PHY11-CH06-T04",
                  topicNumber: 4,
                  topic: "Relation between linear and angular quantities",
                  brief:
                    "Linear and angular quantities are related by expressions such as arc length s = rθ and tangential speed v = rω.",
                },
                {
                  id: "PHY11-CH06-T05",
                  topicNumber: 5,
                  topic: "Uniform circular motion",
                  brief:
                    "Uniform circular motion occurs when an object moves along a circular path at constant speed while its velocity direction continuously changes.",
                },
                {
                  id: "PHY11-CH06-T06",
                  topicNumber: 6,
                  topic: "Centripetal acceleration",
                  brief:
                    "Centripetal acceleration points toward the centre of a circular path and has magnitude v²/r for speed v and radius r.",
                },
                {
                  id: "PHY11-CH06-T07",
                  topicNumber: 7,
                  topic: "Centripetal force",
                  brief:
                    "Centripetal force is the net inward force required for circular motion, with magnitude mv²/r for an object of mass m.",
                },
                {
                  id: "PHY11-CH06-T08",
                  topicNumber: 8,
                  topic: "Centrifugal force in a rotating frame",
                  brief:
                    "Centrifugal force is an apparent outward force introduced when motion is analyzed from a rotating reference frame.",
                },
                {
                  id: "PHY11-CH06-T09",
                  topicNumber: 9,
                  topic: "Motion on a level circular road",
                  brief:
                    "On a level circular road, friction between the tyres and road can provide the centripetal force needed for a vehicle to turn.",
                },
                {
                  id: "PHY11-CH06-T10",
                  topicNumber: 10,
                  topic: "Banking of roads",
                  brief:
                    "Banking tilts a road's outer edge upward so that the normal reaction contributes to the centripetal force needed for safe turning.",
                },
                {
                  id: "PHY11-CH06-T11",
                  topicNumber: 11,
                  topic: "Conical pendulum",
                  brief:
                    "A conical pendulum has a bob moving in a horizontal circle while its string traces the surface of a cone.",
                },
                {
                  id: "PHY11-CH06-T12",
                  topicNumber: 12,
                  topic: "Vertical circular motion",
                  brief:
                    "Vertical circular motion involves an object moving in a vertical circle, where gravity changes its speed and the required tension or normal force.",
                },
                {
                  id: "PHY11-CH06-T13",
                  topicNumber: 13,
                  topic: "Applications of circular motion",
                  brief:
                    "Circular motion principles explain vehicle turning, rotating machinery, satellite orbits, conical pendulums, and objects moving on curved tracks.",
                },
              ],
            },
            {
              id: "PHY11-CH07",
              chapterNumber: 7,
              chapterName: "Gravitation",
              topics: [
                {
                  id: "PHY11-CH07-T01",
                  topicNumber: 1,
                  topic: "Newton's law of universal gravitation",
                  brief:
                    "Newton's law states that every pair of masses attracts with a force proportional to their masses and inversely proportional to the square of their separation.",
                },
                {
                  id: "PHY11-CH07-T02",
                  topicNumber: 2,
                  topic: "Gravitational constant",
                  brief:
                    "The gravitational constant G is the proportionality constant in Newton's law of universal gravitation and has units of N m² kg⁻².",
                },
                {
                  id: "PHY11-CH07-T03",
                  topicNumber: 3,
                  topic: "Gravitational field",
                  brief:
                    "A gravitational field is the region around a mass where another mass experiences gravitational force.",
                },
                {
                  id: "PHY11-CH07-T04",
                  topicNumber: 4,
                  topic: "Gravitational field strength",
                  brief:
                    "Gravitational field strength is the gravitational force per unit mass at a point and is represented by gravitational acceleration.",
                },
                {
                  id: "PHY11-CH07-T05",
                  topicNumber: 5,
                  topic: "Acceleration due to gravity",
                  brief:
                    "Acceleration due to gravity is the acceleration of a freely falling object caused by gravitational attraction, approximately 9.8 m/s² near Earth's surface.",
                },
                {
                  id: "PHY11-CH07-T06",
                  topicNumber: 6,
                  topic: "Variation of gravitational acceleration",
                  brief:
                    "Gravitational acceleration varies with altitude, depth, latitude, and Earth's rotation because distance from Earth's centre and local conditions change.",
                },
                {
                  id: "PHY11-CH07-T07",
                  topicNumber: 7,
                  topic: "Gravitational potential",
                  brief:
                    "Gravitational potential at a point is the gravitational potential energy per unit mass relative to a chosen reference, commonly zero at infinity.",
                },
                {
                  id: "PHY11-CH07-T08",
                  topicNumber: 8,
                  topic: "Gravitational potential energy",
                  brief:
                    "Gravitational potential energy is the energy associated with the position of masses in a gravitational field, expressed as -GMm/r for two point masses with zero at infinity.",
                },
                {
                  id: "PHY11-CH07-T09",
                  topicNumber: 9,
                  topic: "Mass and weight",
                  brief:
                    "Mass is a measure of inertia, while weight is the gravitational force on a body and varies with the local gravitational field.",
                },
                {
                  id: "PHY11-CH07-T10",
                  topicNumber: 10,
                  topic: "Motion of satellites",
                  brief:
                    "Satellite motion occurs when gravity supplies the centripetal force needed to maintain an orbit around a planet or other celestial body.",
                },
                {
                  id: "PHY11-CH07-T11",
                  topicNumber: 11,
                  topic: "Orbital velocity",
                  brief:
                    "Orbital velocity is the speed required for a satellite to maintain a particular orbit; for a circular orbit it depends on the central body's mass and orbital radius.",
                },
                {
                  id: "PHY11-CH07-T12",
                  topicNumber: 12,
                  topic: "Escape velocity",
                  brief:
                    "Escape velocity is the minimum initial speed needed for an object to escape a celestial body's gravitational field without further propulsion, neglecting resistance.",
                },
                {
                  id: "PHY11-CH07-T13",
                  topicNumber: 13,
                  topic: "Geostationary satellites",
                  brief:
                    "A geostationary satellite follows a circular equatorial orbit in Earth's rotation direction with a period equal to one sidereal day, appearing fixed over one longitude.",
                },
                {
                  id: "PHY11-CH07-T14",
                  topicNumber: 14,
                  topic: "Weightlessness",
                  brief:
                    "Weightlessness is the condition of zero apparent weight, often experienced during free fall when no supporting contact force acts on a person.",
                },
                {
                  id: "PHY11-CH07-T15",
                  topicNumber: 15,
                  topic: "Kepler's laws of planetary motion",
                  brief:
                    "Kepler's laws describe planetary orbits as ellipses, equal areas swept in equal times, and a relationship between orbital period and orbital size.",
                },
              ],
            },
            {
              id: "PHY11-CH08",
              chapterNumber: 8,
              chapterName: "Elasticity",
              topics: [
                {
                  id: "PHY11-CH08-T01",
                  topicNumber: 1,
                  topic: "Elastic and plastic deformation",
                  brief:
                    "Elastic deformation disappears when the applied force is removed, whereas plastic deformation leaves a permanent change in shape or size.",
                },
                {
                  id: "PHY11-CH08-T02",
                  topicNumber: 2,
                  topic: "Elasticity",
                  brief:
                    "Elasticity is the property of a material that enables it to regain its original shape and size after a deforming force is removed, within its elastic limit.",
                },
                {
                  id: "PHY11-CH08-T03",
                  topicNumber: 3,
                  topic: "Stress",
                  brief:
                    "Stress is the internal restoring force per unit area developed in a material under an external load.",
                },
                {
                  id: "PHY11-CH08-T04",
                  topicNumber: 4,
                  topic: "Strain",
                  brief:
                    "Strain is the ratio of a change in dimension to the original dimension and is dimensionless.",
                },
                {
                  id: "PHY11-CH08-T05",
                  topicNumber: 5,
                  topic: "Hooke's law",
                  brief:
                    "Hooke's law states that stress is proportional to strain within the proportional limit of an elastic material.",
                },
                {
                  id: "PHY11-CH08-T06",
                  topicNumber: 6,
                  topic: "Limit of proportionality",
                  brief:
                    "The limit of proportionality is the greatest stress up to which stress and strain remain directly proportional.",
                },
                {
                  id: "PHY11-CH08-T07",
                  topicNumber: 7,
                  topic: "Elastic limit",
                  brief:
                    "The elastic limit is the maximum stress a material can experience and still return to its original shape after unloading.",
                },
                {
                  id: "PHY11-CH08-T08",
                  topicNumber: 8,
                  topic: "Young's modulus",
                  brief:
                    "Young's modulus is the ratio of longitudinal stress to longitudinal strain within the elastic region, indicating resistance to stretching or compression.",
                },
                {
                  id: "PHY11-CH08-T09",
                  topicNumber: 9,
                  topic: "Bulk modulus",
                  brief:
                    "Bulk modulus is the ratio of pressure change to the resulting fractional change in volume, with a sign convention that accounts for compression.",
                },
                {
                  id: "PHY11-CH08-T10",
                  topicNumber: 10,
                  topic: "Shear modulus",
                  brief:
                    "Shear modulus is the ratio of shear stress to shear strain within the elastic region and measures resistance to shape change.",
                },
                {
                  id: "PHY11-CH08-T11",
                  topicNumber: 11,
                  topic: "Compressibility",
                  brief:
                    "Compressibility measures how much a material's volume changes under pressure and is the reciprocal of bulk modulus for small elastic changes.",
                },
                {
                  id: "PHY11-CH08-T12",
                  topicNumber: 12,
                  topic: "Elastic potential energy",
                  brief:
                    "Elastic potential energy is stored in a deformed elastic body; for a linear spring it equals one-half the spring constant times extension squared.",
                },
                {
                  id: "PHY11-CH08-T13",
                  topicNumber: 13,
                  topic: "Stress-strain curves",
                  brief:
                    "A stress-strain curve plots stress against strain to show a material's elastic behaviour, yield point, plastic deformation, and eventual failure.",
                },
                {
                  id: "PHY11-CH08-T14",
                  topicNumber: 14,
                  topic: "Applications of elasticity",
                  brief:
                    "Elasticity principles guide the design of bridges, buildings, springs, cables, and structural components by predicting deformation under loads.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY11-B02",
          branchNumber: 2,
          branchName: "Heat and Thermodynamics",
          chapters: [
            {
              id: "PHY11-CH09",
              chapterNumber: 9,
              chapterName: "Heat and Temperature",
              topics: [
                {
                  id: "PHY11-CH09-T01",
                  topicNumber: 1,
                  topic: "Concept of heat",
                  brief:
                    "Heat is energy transferred between objects or systems because of a temperature difference, flowing spontaneously from higher to lower temperature.",
                },
                {
                  id: "PHY11-CH09-T02",
                  topicNumber: 2,
                  topic: "Concept of temperature",
                  brief:
                    "Temperature measures the thermal state of a substance and determines the direction of heat transfer between objects in thermal contact.",
                },
                {
                  id: "PHY11-CH09-T03",
                  topicNumber: 3,
                  topic: "Thermal equilibrium",
                  brief:
                    "Thermal equilibrium occurs when objects in thermal contact have the same temperature and there is no net heat transfer between them.",
                },
                {
                  id: "PHY11-CH09-T04",
                  topicNumber: 4,
                  topic: "Zeroth law of thermodynamics",
                  brief:
                    "The zeroth law states that if two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other.",
                },
                {
                  id: "PHY11-CH09-T05",
                  topicNumber: 5,
                  topic: "Thermometers",
                  brief:
                    "Thermometers measure temperature using measurable physical properties that change predictably with temperature, such as liquid expansion or electrical resistance.",
                },
                {
                  id: "PHY11-CH09-T06",
                  topicNumber: 6,
                  topic: "Temperature scales",
                  brief:
                    "Temperature scales assign numerical values to thermal states, with Celsius, Fahrenheit, and Kelvin being commonly used scales.",
                },
                {
                  id: "PHY11-CH09-T07",
                  topicNumber: 7,
                  topic: "Conversion between temperature scales",
                  brief:
                    "Temperature-scale conversion uses mathematical relationships to express the same temperature in Celsius, Fahrenheit, or Kelvin units.",
                },
                {
                  id: "PHY11-CH09-T08",
                  topicNumber: 8,
                  topic: "Thermal contact",
                  brief:
                    "Thermal contact allows energy to transfer as heat between systems, enabling their temperatures to change until thermal equilibrium is reached.",
                },
                {
                  id: "PHY11-CH09-T09",
                  topicNumber: 9,
                  topic: "Internal energy",
                  brief:
                    "Internal energy is the total microscopic kinetic and potential energy of the particles within a system.",
                },
                {
                  id: "PHY11-CH09-T10",
                  topicNumber: 10,
                  topic: "Heat capacity",
                  brief:
                    "Heat capacity is the amount of heat required to raise the temperature of an entire object or system by one kelvin.",
                },
                {
                  id: "PHY11-CH09-T11",
                  topicNumber: 11,
                  topic: "Specific heat capacity",
                  brief:
                    "Specific heat capacity is the heat required to raise the temperature of one kilogram of a substance by one kelvin.",
                },
              ],
            },
            {
              id: "PHY11-CH10",
              chapterNumber: 10,
              chapterName: "Thermal Expansion",
              topics: [
                {
                  id: "PHY11-CH10-T01",
                  topicNumber: 1,
                  topic: "Thermal expansion of solids",
                  brief:
                    "Thermal expansion of solids is the increase in their dimensions when heated, caused by changes in the average separation of their particles.",
                },
                {
                  id: "PHY11-CH10-T02",
                  topicNumber: 2,
                  topic: "Linear expansion",
                  brief:
                    "Linear expansion is the change in a solid's length with temperature and is described by its coefficient of linear expansion.",
                },
                {
                  id: "PHY11-CH10-T03",
                  topicNumber: 3,
                  topic: "Areal expansion",
                  brief:
                    "Areal expansion is the change in the surface area of a material as its temperature changes.",
                },
                {
                  id: "PHY11-CH10-T04",
                  topicNumber: 4,
                  topic: "Volume expansion",
                  brief:
                    "Volume expansion is the change in a substance's volume with temperature, commonly described by its coefficient of volume expansion.",
                },
                {
                  id: "PHY11-CH10-T05",
                  topicNumber: 5,
                  topic: "Coefficients of thermal expansion",
                  brief:
                    "Coefficients of thermal expansion quantify the fractional change in length, area, or volume per unit temperature change.",
                },
                {
                  id: "PHY11-CH10-T06",
                  topicNumber: 6,
                  topic: "Relation between expansion coefficients",
                  brief:
                    "For an isotropic solid undergoing small temperature changes, the area expansion coefficient is approximately twice the linear coefficient, and the volume coefficient approximately three times the linear coefficient.",
                },
                {
                  id: "PHY11-CH10-T07",
                  topicNumber: 7,
                  topic: "Thermal expansion of liquids",
                  brief:
                    "Thermal expansion of liquids is the increase in liquid volume as temperature rises, generally occurring because particles move farther apart on average.",
                },
                {
                  id: "PHY11-CH10-T08",
                  topicNumber: 8,
                  topic: "Real and apparent expansion",
                  brief:
                    "Real expansion is the actual increase in a liquid's volume, while apparent expansion is the observed increase relative to the expanding container.",
                },
                {
                  id: "PHY11-CH10-T09",
                  topicNumber: 9,
                  topic: "Anomalous expansion of water",
                  brief:
                    "Water exhibits anomalous expansion between 0°C and 4°C, contracting when heated in this range and reaching maximum density at 4°C.",
                },
                {
                  id: "PHY11-CH10-T10",
                  topicNumber: 10,
                  topic: "Applications of thermal expansion",
                  brief:
                    "Thermal expansion principles are used in thermometer design, expansion joints in bridges, bimetallic strips, and allowances for changes in railway track length.",
                },
                {
                  id: "PHY11-CH10-T11",
                  topicNumber: 11,
                  topic: "Thermal stress",
                  brief:
                    "Thermal stress develops when a material's expansion or contraction due to temperature change is constrained.",
                },
              ],
            },
            {
              id: "PHY11-CH11",
              chapterNumber: 11,
              chapterName: "Quantity of Heat",
              topics: [
                {
                  id: "PHY11-CH11-T01",
                  topicNumber: 1,
                  topic: "Heat and temperature difference",
                  brief:
                    "A temperature difference drives heat transfer between systems, and the amount of heat transferred depends on factors including mass, specific heat capacity, and temperature change.",
                },
                {
                  id: "PHY11-CH11-T02",
                  topicNumber: 2,
                  topic: "Specific heat capacity",
                  brief:
                    "Specific heat capacity describes how much heat is needed per kilogram to produce a one-kelvin temperature increase in a substance.",
                },
                {
                  id: "PHY11-CH11-T03",
                  topicNumber: 3,
                  topic: "Heat capacity",
                  brief:
                    "Heat capacity measures the heat required to change the temperature of an entire body by one kelvin and depends on its material and mass.",
                },
                {
                  id: "PHY11-CH11-T04",
                  topicNumber: 4,
                  topic: "Calorimetry",
                  brief:
                    "Calorimetry measures heat exchanged during physical or chemical processes using temperature changes and known thermal properties.",
                },
                {
                  id: "PHY11-CH11-T05",
                  topicNumber: 5,
                  topic: "Principle of mixtures",
                  brief:
                    "The principle of mixtures states that, in an isolated system, heat lost by hotter substances equals heat gained by cooler substances when no other energy transfers occur.",
                },
                {
                  id: "PHY11-CH11-T06",
                  topicNumber: 6,
                  topic: "Latent heat",
                  brief:
                    "Latent heat is energy absorbed or released during a change of state without a change in temperature at constant pressure.",
                },
                {
                  id: "PHY11-CH11-T07",
                  topicNumber: 7,
                  topic: "Specific latent heat of fusion",
                  brief:
                    "Specific latent heat of fusion is the energy required to convert one kilogram of a solid into liquid at its melting point without changing temperature.",
                },
                {
                  id: "PHY11-CH11-T08",
                  topicNumber: 8,
                  topic: "Specific latent heat of vaporisation",
                  brief:
                    "Specific latent heat of vaporisation is the energy required to convert one kilogram of liquid into vapour at its boiling point without changing temperature.",
                },
                {
                  id: "PHY11-CH11-T09",
                  topicNumber: 9,
                  topic: "Change of state",
                  brief:
                    "A change of state occurs when a substance transforms between solid, liquid, and gas through processes such as melting, freezing, evaporation, and condensation.",
                },
                {
                  id: "PHY11-CH11-T10",
                  topicNumber: 10,
                  topic: "Heating and cooling curves",
                  brief:
                    "Heating and cooling curves show how temperature changes as heat is supplied or removed, including constant-temperature regions during phase transitions.",
                },
                {
                  id: "PHY11-CH11-T11",
                  topicNumber: 11,
                  topic: "Heat transfer during phase changes",
                  brief:
                    "During a phase change, heat is absorbed or released as latent heat to change the substance's state rather than its temperature.",
                },
                {
                  id: "PHY11-CH11-T12",
                  topicNumber: 12,
                  topic: "Numerical problems on calorimetry",
                  brief:
                    "Calorimetry problems apply heat-capacity and latent-heat relationships to calculate unknown temperatures, masses, heat quantities, or final equilibrium conditions.",
                },
              ],
            },
            {
              id: "PHY11-CH12",
              chapterNumber: 12,
              chapterName: "Rate of Heat Flow",
              topics: [
                {
                  id: "PHY11-CH12-T01",
                  topicNumber: 1,
                  topic: "Conduction",
                  brief:
                    "Conduction transfers heat through a material by microscopic interactions between particles, without requiring bulk movement of the material.",
                },
                {
                  id: "PHY11-CH12-T02",
                  topicNumber: 2,
                  topic: "Convection",
                  brief:
                    "Convection transfers heat through the bulk movement of fluids, such as air or water, caused by temperature and density differences or external circulation.",
                },
                {
                  id: "PHY11-CH12-T03",
                  topicNumber: 3,
                  topic: "Radiation",
                  brief:
                    "Thermal radiation transfers energy through electromagnetic waves and does not require a material medium.",
                },
                {
                  id: "PHY11-CH12-T04",
                  topicNumber: 4,
                  topic: "Thermal conductivity",
                  brief:
                    "Thermal conductivity measures a material's ability to conduct heat and determines the rate of heat flow for a given temperature gradient.",
                },
                {
                  id: "PHY11-CH12-T05",
                  topicNumber: 5,
                  topic: "Rate of heat conduction",
                  brief:
                    "The rate of heat conduction depends on thermal conductivity, cross-sectional area, temperature difference, and the thickness of the material.",
                },
                {
                  id: "PHY11-CH12-T06",
                  topicNumber: 6,
                  topic: "Temperature gradient",
                  brief:
                    "A temperature gradient describes how temperature changes with distance and determines the direction and magnitude of conductive heat flow.",
                },
                {
                  id: "PHY11-CH12-T07",
                  topicNumber: 7,
                  topic: "Composite slabs",
                  brief:
                    "Composite slabs consist of layers of different materials, and their combined heat-transfer rate depends on the thermal resistance of each layer.",
                },
                {
                  id: "PHY11-CH12-T08",
                  topicNumber: 8,
                  topic: "Thermal resistance",
                  brief:
                    "Thermal resistance measures opposition to heat flow and depends on a material's thickness, area, and thermal conductivity.",
                },
                {
                  id: "PHY11-CH12-T09",
                  topicNumber: 9,
                  topic: "Black-body radiation",
                  brief:
                    "A black body is an ideal object that absorbs all incident radiation and emits the maximum possible thermal radiation at a given temperature.",
                },
                {
                  id: "PHY11-CH12-T10",
                  topicNumber: 10,
                  topic: "Stefan-Boltzmann law",
                  brief:
                    "The Stefan-Boltzmann law states that the total power radiated per unit area by an ideal black body is proportional to the fourth power of its absolute temperature.",
                },
                {
                  id: "PHY11-CH12-T11",
                  topicNumber: 11,
                  topic: "Newton's law of cooling",
                  brief:
                    "Newton's law of cooling states that, under suitable conditions, an object's rate of temperature decrease is approximately proportional to the temperature difference between it and its surroundings.",
                },
                {
                  id: "PHY11-CH12-T12",
                  topicNumber: 12,
                  topic: "Applications of heat transfer",
                  brief:
                    "Heat-transfer principles explain the operation of cooking equipment, radiators, insulation, heat exchangers, solar heaters, and thermal management systems.",
                },
              ],
            },
            {
              id: "PHY11-CH13",
              chapterNumber: 13,
              chapterName: "Ideal Gas",
              topics: [
                {
                  id: "PHY11-CH13-T01",
                  topicNumber: 1,
                  topic: "Properties of gases",
                  brief:
                    "Gases have no fixed shape or volume, expand to fill their containers, are compressible, and exert pressure on container walls.",
                },
                {
                  id: "PHY11-CH13-T02",
                  topicNumber: 2,
                  topic: "Gas pressure",
                  brief:
                    "Gas pressure arises from molecules colliding with container walls and is defined as the perpendicular force exerted per unit area.",
                },
                {
                  id: "PHY11-CH13-T03",
                  topicNumber: 3,
                  topic: "Boyle's law",
                  brief:
                    "Boyle's law states that for a fixed amount of gas at constant temperature, pressure is inversely proportional to volume.",
                },
                {
                  id: "PHY11-CH13-T04",
                  topicNumber: 4,
                  topic: "Charles's law",
                  brief:
                    "Charles's law states that the volume of a fixed amount of gas is directly proportional to its absolute temperature at constant pressure.",
                },
                {
                  id: "PHY11-CH13-T05",
                  topicNumber: 5,
                  topic: "Pressure law",
                  brief:
                    "The pressure law states that the pressure of a fixed amount of gas at constant volume is directly proportional to its absolute temperature.",
                },
                {
                  id: "PHY11-CH13-T06",
                  topicNumber: 6,
                  topic: "Avogadro's law",
                  brief:
                    "Avogadro's law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules.",
                },
                {
                  id: "PHY11-CH13-T07",
                  topicNumber: 7,
                  topic: "Ideal gas equation",
                  brief:
                    "The ideal gas equation, PV = nRT, relates gas pressure, volume, amount of substance, absolute temperature, and the universal gas constant.",
                },
                {
                  id: "PHY11-CH13-T08",
                  topicNumber: 8,
                  topic: "Universal gas constant",
                  brief:
                    "The universal gas constant R links macroscopic gas properties in the ideal gas equation and has a value of approximately 8.314 J mol⁻¹ K⁻¹.",
                },
                {
                  id: "PHY11-CH13-T09",
                  topicNumber: 9,
                  topic: "Molecular interpretation of temperature",
                  brief:
                    "The molecular interpretation of temperature connects absolute temperature with the average translational kinetic energy of particles in an ideal gas.",
                },
                {
                  id: "PHY11-CH13-T10",
                  topicNumber: 10,
                  topic: "Kinetic theory of gases",
                  brief:
                    "Kinetic theory explains gas behaviour by modelling gases as many rapidly moving particles whose collisions produce pressure and whose average kinetic energy depends on temperature.",
                },
                {
                  id: "PHY11-CH13-T11",
                  topicNumber: 11,
                  topic: "Assumptions of kinetic theory",
                  brief:
                    "The kinetic theory assumes numerous randomly moving particles, negligible molecular volume, negligible intermolecular forces except during collisions, and elastic collisions.",
                },
                {
                  id: "PHY11-CH13-T12",
                  topicNumber: 12,
                  topic: "Pressure exerted by a gas",
                  brief:
                    "Kinetic theory derives gas pressure from molecular momentum changes during collisions with container walls and relates pressure to molecular motion.",
                },
                {
                  id: "PHY11-CH13-T13",
                  topicNumber: 13,
                  topic: "Root mean square speed",
                  brief:
                    "Root mean square speed is the square root of the mean of the squared molecular speeds and depends on absolute temperature and molar mass.",
                },
                {
                  id: "PHY11-CH13-T14",
                  topicNumber: 14,
                  topic: "Average kinetic energy of gas molecules",
                  brief:
                    "For an ideal gas in thermal equilibrium, the average translational kinetic energy per molecule is three-halves times the Boltzmann constant multiplied by absolute temperature.",
                },
                {
                  id: "PHY11-CH13-T15",
                  topicNumber: 15,
                  topic: "Degrees of freedom",
                  brief:
                    "Degrees of freedom are independent ways a molecule can store energy, including translational, rotational, and vibrational modes.",
                },
                {
                  id: "PHY11-CH13-T16",
                  topicNumber: 16,
                  topic: "Internal energy of an ideal gas",
                  brief:
                    "The internal energy of an ideal gas consists of molecular kinetic energy and depends only on temperature for a fixed amount of gas.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY11-B03",
          branchNumber: 3,
          branchName: "Waves and Optics",
          chapters: [
            {
              id: "PHY11-CH14",
              chapterNumber: 14,
              chapterName: "Reflection at Curved Mirrors",
              topics: [
                {
                  id: "PHY11-CH14-T01",
                  topicNumber: 1,
                  topic: "Reflection of light",
                  brief:
                    "Reflection of light is the bouncing back of light into the original medium when it strikes a surface.",
                },
                {
                  id: "PHY11-CH14-T02",
                  topicNumber: 2,
                  topic: "Spherical mirrors",
                  brief:
                    "Spherical mirrors are reflecting surfaces forming part of a sphere and are classified as concave or convex mirrors.",
                },
                {
                  id: "PHY11-CH14-T03",
                  topicNumber: 3,
                  topic: "Concave mirrors",
                  brief:
                    "A concave mirror has an inward-curved reflecting surface that can converge parallel light rays and form real or virtual images.",
                },
                {
                  id: "PHY11-CH14-T04",
                  topicNumber: 4,
                  topic: "Convex mirrors",
                  brief:
                    "A convex mirror has an outward-curved reflecting surface that diverges parallel light rays and generally forms virtual, upright, diminished images.",
                },
                {
                  id: "PHY11-CH14-T05",
                  topicNumber: 5,
                  topic: "Pole and principal axis",
                  brief:
                    "The pole is the midpoint of a spherical mirror's reflecting surface, while the principal axis is the line passing through the pole and centre of curvature.",
                },
                {
                  id: "PHY11-CH14-T06",
                  topicNumber: 6,
                  topic: "Centre of curvature",
                  brief:
                    "The centre of curvature is the centre of the sphere of which a spherical mirror forms a part.",
                },
                {
                  id: "PHY11-CH14-T07",
                  topicNumber: 7,
                  topic: "Radius of curvature",
                  brief:
                    "The radius of curvature is the distance between the pole and centre of curvature of a spherical mirror.",
                },
                {
                  id: "PHY11-CH14-T08",
                  topicNumber: 8,
                  topic: "Principal focus",
                  brief:
                    "The principal focus is the point where rays parallel to the principal axis converge or appear to diverge after reflection.",
                },
                {
                  id: "PHY11-CH14-T09",
                  topicNumber: 9,
                  topic: "Focal length",
                  brief:
                    "Focal length is the distance between the pole and principal focus of a spherical mirror and is approximately half its radius of curvature.",
                },
                {
                  id: "PHY11-CH14-T10",
                  topicNumber: 10,
                  topic: "Mirror formula",
                  brief:
                    "The mirror formula relates object distance, image distance, and focal length through the equation 1/f = 1/v + 1/u under the Cartesian sign convention.",
                },
                {
                  id: "PHY11-CH14-T11",
                  topicNumber: 11,
                  topic: "Magnification",
                  brief:
                    "Magnification describes the ratio of image height to object height and indicates whether the image is enlarged, diminished, upright, or inverted.",
                },
                {
                  id: "PHY11-CH14-T12",
                  topicNumber: 12,
                  topic: "Sign conventions",
                  brief:
                    "Sign conventions assign positive and negative values to distances and heights so mirror equations can be applied consistently.",
                },
                {
                  id: "PHY11-CH14-T13",
                  topicNumber: 13,
                  topic: "Image formation by spherical mirrors",
                  brief:
                    "Image formation by spherical mirrors depends on the mirror type and the object's position relative to the pole, focus, and centre of curvature.",
                },
                {
                  id: "PHY11-CH14-T14",
                  topicNumber: 14,
                  topic: "Ray diagrams",
                  brief:
                    "Ray diagrams use selected principal rays to locate images and determine their position, size, orientation, and nature.",
                },
                {
                  id: "PHY11-CH14-T15",
                  topicNumber: 15,
                  topic: "Applications of curved mirrors",
                  brief:
                    "Curved mirrors are used in vehicle rear-view mirrors, shaving mirrors, vehicle headlights, torches, and reflecting telescopes.",
                },
              ],
            },
            {
              id: "PHY11-CH15",
              chapterNumber: 15,
              chapterName: "Refraction at Plane Surfaces",
              topics: [
                {
                  id: "PHY11-CH15-T01",
                  topicNumber: 1,
                  topic: "Refraction of light",
                  brief:
                    "Refraction is the change in direction of light as it passes between media in which its speed differs.",
                },
                {
                  id: "PHY11-CH15-T02",
                  topicNumber: 2,
                  topic: "Laws of refraction",
                  brief:
                    "The laws of refraction state that incident and refracted rays lie in the same plane and obey a fixed relationship between their angles and refractive indices.",
                },
                {
                  id: "PHY11-CH15-T03",
                  topicNumber: 3,
                  topic: "Refractive index",
                  brief:
                    "Refractive index describes how much light slows in a medium and, for a transparent medium, relates the speed of light in vacuum to its speed in that medium.",
                },
                {
                  id: "PHY11-CH15-T04",
                  topicNumber: 4,
                  topic: "Absolute and relative refractive index",
                  brief:
                    "Absolute refractive index compares light speed in vacuum with that in a medium, while relative refractive index compares light speeds in two media.",
                },
                {
                  id: "PHY11-CH15-T05",
                  topicNumber: 5,
                  topic: "Snell's law",
                  brief:
                    "Snell's law relates the angles of incidence and refraction to the refractive indices of two media through n₁ sin i = n₂ sin r.",
                },
                {
                  id: "PHY11-CH15-T06",
                  topicNumber: 6,
                  topic: "Optical density",
                  brief:
                    "Optical density describes how a medium affects light propagation; a medium with a higher refractive index has a lower light speed.",
                },
                {
                  id: "PHY11-CH15-T07",
                  topicNumber: 7,
                  topic: "Apparent depth",
                  brief:
                    "Apparent depth is the perceived depth of an object viewed through a refracting surface, which may differ from its actual depth.",
                },
                {
                  id: "PHY11-CH15-T08",
                  topicNumber: 8,
                  topic: "Real depth and apparent depth",
                  brief:
                    "Real depth is an object's actual distance below a surface, while apparent depth is its perceived distance due to refraction.",
                },
                {
                  id: "PHY11-CH15-T09",
                  topicNumber: 9,
                  topic: "Lateral displacement",
                  brief:
                    "Lateral displacement is the sideways shift of a light ray passing through a parallel-sided transparent slab, with the emergent ray parallel to the incident ray.",
                },
                {
                  id: "PHY11-CH15-T10",
                  topicNumber: 10,
                  topic: "Total internal reflection",
                  brief:
                    "Total internal reflection occurs when light travels from an optically denser to a less dense medium and strikes the boundary at an angle greater than the critical angle.",
                },
                {
                  id: "PHY11-CH15-T11",
                  topicNumber: 11,
                  topic: "Critical angle",
                  brief:
                    "The critical angle is the angle of incidence in the denser medium for which the refracted ray travels along the boundary at 90 degrees.",
                },
                {
                  id: "PHY11-CH15-T12",
                  topicNumber: 12,
                  topic: "Applications of total internal reflection",
                  brief:
                    "Total internal reflection is used in optical fibres, prism-based binoculars, medical endoscopes, and devices that guide light efficiently.",
                },
                {
                  id: "PHY11-CH15-T13",
                  topicNumber: 13,
                  topic: "Optical fibres",
                  brief:
                    "Optical fibres are thin transparent strands that guide light through repeated total internal reflection and transmit information or illumination.",
                },
              ],
            },
            {
              id: "PHY11-CH16",
              chapterNumber: 16,
              chapterName: "Refraction Through Prisms",
              topics: [
                {
                  id: "PHY11-CH16-T01",
                  topicNumber: 1,
                  topic: "Prisms and their geometry",
                  brief:
                    "An optical prism is a transparent refracting medium with two plane refracting surfaces inclined at an angle called the prism angle.",
                },
                {
                  id: "PHY11-CH16-T02",
                  topicNumber: 2,
                  topic: "Refraction through a prism",
                  brief:
                    "Refraction through a prism occurs when light bends at its two refracting surfaces, changing the direction of the emerging ray.",
                },
                {
                  id: "PHY11-CH16-T03",
                  topicNumber: 3,
                  topic: "Angle of deviation",
                  brief:
                    "The angle of deviation is the angle between the original direction of the incident ray and the direction of the emergent ray.",
                },
                {
                  id: "PHY11-CH16-T04",
                  topicNumber: 4,
                  topic: "Angle of minimum deviation",
                  brief:
                    "The angle of minimum deviation is the smallest deviation produced by a prism and occurs when the ray travels symmetrically through it.",
                },
                {
                  id: "PHY11-CH16-T05",
                  topicNumber: 5,
                  topic: "Refractive index of a prism",
                  brief:
                    "The refractive index of a prism can be determined from its prism angle and minimum deviation using the prism refraction relationship.",
                },
                {
                  id: "PHY11-CH16-T06",
                  topicNumber: 6,
                  topic: "Deviation and incidence angle relationships",
                  brief:
                    "The deviation produced by a prism depends on the incidence angle, prism angle, and refractive index of the material.",
                },
                {
                  id: "PHY11-CH16-T07",
                  topicNumber: 7,
                  topic: "Dispersion by a prism",
                  brief:
                    "Dispersion by a prism separates white light into colours because the refractive index of the prism material varies with wavelength.",
                },
                {
                  id: "PHY11-CH16-T08",
                  topicNumber: 8,
                  topic: "Practical applications of prisms",
                  brief:
                    "Prisms are used to disperse light, redirect optical beams, reverse images, and separate or analyze wavelengths in optical instruments.",
                },
                {
                  id: "PHY11-CH16-T09",
                  topicNumber: 9,
                  topic: "Numerical problems on prism refraction",
                  brief:
                    "Numerical problems on prism refraction apply Snell's law and prism geometry to calculate refractive index, incidence angles, emergence angles, and deviation.",
                },
              ],
            },
            {
              id: "PHY11-CH17",
              chapterNumber: 17,
              chapterName: "Lenses",
              topics: [
                {
                  id: "PHY11-CH17-T01",
                  topicNumber: 1,
                  topic: "Thin lenses",
                  brief:
                    "Thin lenses are optical elements whose thickness is small compared with their radii of curvature, allowing simplified image-formation calculations.",
                },
                {
                  id: "PHY11-CH17-T02",
                  topicNumber: 2,
                  topic: "Convex lenses",
                  brief:
                    "A convex lens is thicker at the centre than at the edges and converges parallel rays under ordinary conditions in air.",
                },
                {
                  id: "PHY11-CH17-T03",
                  topicNumber: 3,
                  topic: "Concave lenses",
                  brief:
                    "A concave lens is thinner at the centre than at the edges and diverges parallel rays under ordinary conditions in air.",
                },
                {
                  id: "PHY11-CH17-T04",
                  topicNumber: 4,
                  topic: "Optical centre",
                  brief:
                    "The optical centre is a point in a thin lens through which a ray passes approximately without angular deviation.",
                },
                {
                  id: "PHY11-CH17-T05",
                  topicNumber: 5,
                  topic: "Principal axis",
                  brief:
                    "The principal axis is the straight line passing through the optical centre and the centres of curvature of a lens's surfaces.",
                },
                {
                  id: "PHY11-CH17-T06",
                  topicNumber: 6,
                  topic: "Principal focus",
                  brief:
                    "The principal focus of a lens is the point where rays parallel to the principal axis converge or appear to diverge after refraction.",
                },
                {
                  id: "PHY11-CH17-T07",
                  topicNumber: 7,
                  topic: "Focal length",
                  brief:
                    "Focal length is the distance between a lens's optical centre and its principal focus, indicating its converging or diverging strength.",
                },
                {
                  id: "PHY11-CH17-T08",
                  topicNumber: 8,
                  topic: "Lens formula",
                  brief:
                    "The thin-lens formula relates focal length, object distance, and image distance, commonly written as 1/f = 1/v - 1/u using the Cartesian sign convention.",
                },
                {
                  id: "PHY11-CH17-T09",
                  topicNumber: 9,
                  topic: "Magnification",
                  brief:
                    "Linear magnification of a lens is the ratio of image height to object height and, with the usual sign convention, equals v/u.",
                },
                {
                  id: "PHY11-CH17-T10",
                  topicNumber: 10,
                  topic: "Power of a lens",
                  brief:
                    "The power of a lens is the reciprocal of its focal length in metres and is measured in dioptres.",
                },
                {
                  id: "PHY11-CH17-T11",
                  topicNumber: 11,
                  topic: "Combination of thin lenses",
                  brief:
                    "For thin lenses in contact, their combined power is the algebraic sum of their individual powers, allowing the equivalent focal length to be calculated.",
                },
                {
                  id: "PHY11-CH17-T12",
                  topicNumber: 12,
                  topic: "Lens maker's formula",
                  brief:
                    "The lens maker's formula relates a lens's focal length to its refractive index and surface curvatures for a specified surrounding medium.",
                },
                {
                  id: "PHY11-CH17-T13",
                  topicNumber: 13,
                  topic: "Image formation by lenses",
                  brief:
                    "Image formation by lenses depends on the lens type and the object's position relative to its focal points.",
                },
                {
                  id: "PHY11-CH17-T14",
                  topicNumber: 14,
                  topic: "Ray diagrams",
                  brief:
                    "Lens ray diagrams use principal rays to determine image location, size, orientation, and whether the image is real or virtual.",
                },
                {
                  id: "PHY11-CH17-T15",
                  topicNumber: 15,
                  topic: "Defects of vision",
                  brief:
                    "Defects of vision are conditions in which the eye does not focus an image correctly on the retina, including myopia, hypermetropia, and presbyopia.",
                },
                {
                  id: "PHY11-CH17-T16",
                  topicNumber: 16,
                  topic: "Correction of vision",
                  brief:
                    "Vision correction uses suitable lenses or optical methods to compensate for focusing errors and produce a clear image on the retina.",
                },
              ],
            },
            {
              id: "PHY11-CH18",
              chapterNumber: 18,
              chapterName: "Dispersion",
              topics: [
                {
                  id: "PHY11-CH18-T01",
                  topicNumber: 1,
                  topic: "Dispersion of light",
                  brief:
                    "Dispersion is the separation of light into different wavelengths because a medium's refractive index depends on wavelength.",
                },
                {
                  id: "PHY11-CH18-T02",
                  topicNumber: 2,
                  topic: "White light and spectrum",
                  brief:
                    "White light contains a range of visible wavelengths, and its spectrum displays the colours produced when those wavelengths are separated.",
                },
                {
                  id: "PHY11-CH18-T03",
                  topicNumber: 3,
                  topic: "Refractive index and wavelength",
                  brief:
                    "The refractive index of many transparent materials varies with wavelength, causing different colours to travel at different speeds and refract by different amounts.",
                },
                {
                  id: "PHY11-CH18-T04",
                  topicNumber: 4,
                  topic: "Angular dispersion",
                  brief:
                    "Angular dispersion is the angular separation between different colours after they pass through a dispersive optical element.",
                },
                {
                  id: "PHY11-CH18-T05",
                  topicNumber: 5,
                  topic: "Dispersive power",
                  brief:
                    "Dispersive power measures a material's ability to separate colours and is related to the variation of refractive index across wavelengths.",
                },
                {
                  id: "PHY11-CH18-T06",
                  topicNumber: 6,
                  topic: "Formation of a spectrum by a prism",
                  brief:
                    "A prism forms a spectrum because different wavelengths of white light undergo different amounts of refraction, usually with violet deviating more than red.",
                },
                {
                  id: "PHY11-CH18-T07",
                  topicNumber: 7,
                  topic: "Pure and impure spectra",
                  brief:
                    "A pure spectrum separates wavelengths so that each position corresponds to a narrow wavelength range, while an impure spectrum contains overlapping colours.",
                },
                {
                  id: "PHY11-CH18-T08",
                  topicNumber: 8,
                  topic: "Rainbow formation",
                  brief:
                    "A rainbow forms when sunlight is refracted, dispersed, internally reflected, and refracted again inside water droplets.",
                },
                {
                  id: "PHY11-CH18-T09",
                  topicNumber: 9,
                  topic: "Applications of dispersion",
                  brief:
                    "Dispersion is used in spectrometers, wavelength analysis, optical testing, and the study of light sources and materials.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY11-B04",
          branchNumber: 4,
          branchName: "Electricity and Magnetism",
          chapters: [
            {
              id: "PHY11-CH19",
              chapterNumber: 19,
              chapterName: "Electric Charges",
              topics: [
                {
                  id: "PHY11-CH19-T01",
                  topicNumber: 1,
                  topic: "Electric charge",
                  brief:
                    "Electric charge is a fundamental property of matter responsible for electrical interactions and is measured in coulombs.",
                },
                {
                  id: "PHY11-CH19-T02",
                  topicNumber: 2,
                  topic: "Positive and negative charges",
                  brief:
                    "Electric charges are positive or negative; like charges repel each other, while unlike charges attract each other.",
                },
                {
                  id: "PHY11-CH19-T03",
                  topicNumber: 3,
                  topic: "Conductors and insulators",
                  brief:
                    "Conductors allow electric charges to move relatively freely, whereas insulators strongly restrict the movement of charges.",
                },
                {
                  id: "PHY11-CH19-T04",
                  topicNumber: 4,
                  topic: "Charging by friction",
                  brief:
                    "Charging by friction occurs when two materials are rubbed together and electrons transfer between them, leaving opposite charges.",
                },
                {
                  id: "PHY11-CH19-T05",
                  topicNumber: 5,
                  topic: "Charging by conduction",
                  brief:
                    "Charging by conduction transfers electric charge through direct contact between a charged object and another object.",
                },
                {
                  id: "PHY11-CH19-T06",
                  topicNumber: 6,
                  topic: "Charging by induction",
                  brief:
                    "Charging by induction redistributes charges through the influence of a nearby charged object without direct contact, often using grounding to leave a net charge.",
                },
                {
                  id: "PHY11-CH19-T07",
                  topicNumber: 7,
                  topic: "Conservation of charge",
                  brief:
                    "The law of conservation of charge states that the total electric charge of an isolated system remains constant.",
                },
                {
                  id: "PHY11-CH19-T08",
                  topicNumber: 8,
                  topic: "Quantisation of charge",
                  brief:
                    "Quantisation of charge means that net electric charge occurs in integer multiples of the elementary charge, approximately 1.602 × 10⁻¹⁹ coulombs.",
                },
                {
                  id: "PHY11-CH19-T09",
                  topicNumber: 9,
                  topic: "Coulomb's law",
                  brief:
                    "Coulomb's law states that the electrostatic force between two point charges is proportional to their charge product and inversely proportional to the square of their separation.",
                },
                {
                  id: "PHY11-CH19-T10",
                  topicNumber: 10,
                  topic: "Permittivity of free space",
                  brief:
                    "Permittivity of free space is a physical constant that appears in Coulomb's law and describes the electric properties of a vacuum.",
                },
                {
                  id: "PHY11-CH19-T11",
                  topicNumber: 11,
                  topic: "Principle of superposition",
                  brief:
                    "The principle of superposition states that the net electrostatic force on a charge equals the vector sum of the forces exerted by all other charges.",
                },
                {
                  id: "PHY11-CH19-T12",
                  topicNumber: 12,
                  topic: "Electric force between point charges",
                  brief:
                    "The electric force between point charges may be attractive or repulsive, depending on their charge signs, and its magnitude follows Coulomb's law.",
                },
              ],
            },
            {
              id: "PHY11-CH20",
              chapterNumber: 20,
              chapterName: "Electric Field",
              topics: [
                {
                  id: "PHY11-CH20-T01",
                  topicNumber: 1,
                  topic: "Electric field",
                  brief:
                    "An electric field is the region around an electric charge where another charge experiences an electric force.",
                },
                {
                  id: "PHY11-CH20-T02",
                  topicNumber: 2,
                  topic: "Electric field intensity",
                  brief:
                    "Electric field intensity is the electric force per unit positive test charge at a point and is measured in newtons per coulomb.",
                },
                {
                  id: "PHY11-CH20-T03",
                  topicNumber: 3,
                  topic: "Electric field due to a point charge",
                  brief:
                    "The electric field due to a point charge depends on the charge magnitude and decreases with the square of the distance from it.",
                },
                {
                  id: "PHY11-CH20-T04",
                  topicNumber: 4,
                  topic: "Electric field due to multiple charges",
                  brief:
                    "The electric field due to multiple charges is calculated by adding the individual electric-field contributions as vectors at the point of interest.",
                },
                {
                  id: "PHY11-CH20-T05",
                  topicNumber: 5,
                  topic: "Principle of superposition",
                  brief:
                    "The principle of superposition for electric fields states that the resultant field equals the vector sum of the fields produced independently by each charge.",
                },
                {
                  id: "PHY11-CH20-T06",
                  topicNumber: 6,
                  topic: "Electric field lines",
                  brief:
                    "Electric field lines are imaginary curves used to represent an electric field, with their direction indicating the force on a positive test charge.",
                },
                {
                  id: "PHY11-CH20-T07",
                  topicNumber: 7,
                  topic: "Properties of electric field lines",
                  brief:
                    "Electric field lines originate on positive charges and terminate on negative charges or at infinity, never intersect, and are denser where the field is stronger.",
                },
                {
                  id: "PHY11-CH20-T08",
                  topicNumber: 8,
                  topic: "Electric dipole",
                  brief:
                    "An electric dipole consists of two equal and opposite charges separated by a small distance.",
                },
                {
                  id: "PHY11-CH20-T09",
                  topicNumber: 9,
                  topic: "Electric field due to a dipole",
                  brief:
                    "The electric field due to a dipole depends on the charges, their separation, and the observation point relative to the dipole's axis.",
                },
                {
                  id: "PHY11-CH20-T10",
                  topicNumber: 10,
                  topic: "Dipole moment",
                  brief:
                    "Electric dipole moment is a vector equal to the charge magnitude multiplied by the separation vector directed from the negative charge to the positive charge.",
                },
                {
                  id: "PHY11-CH20-T11",
                  topicNumber: 11,
                  topic: "Motion of a charge in an electric field",
                  brief:
                    "A charged particle in an electric field experiences a force equal to its charge multiplied by the field, causing acceleration unless balanced by other forces.",
                },
              ],
            },
            {
              id: "PHY11-CH21",
              chapterNumber: 21,
              chapterName:
                "Potential, Potential Difference and Potential Energy",
              topics: [
                {
                  id: "PHY11-CH21-T01",
                  topicNumber: 1,
                  topic: "Electric potential",
                  brief:
                    "Electric potential at a point is the electric potential energy per unit positive test charge relative to a chosen reference.",
                },
                {
                  id: "PHY11-CH21-T02",
                  topicNumber: 2,
                  topic: "Electric potential difference",
                  brief:
                    "Electric potential difference is the change in electric potential between two points and equals the work done per unit charge by an external agent in moving a charge quasistatically.",
                },
                {
                  id: "PHY11-CH21-T03",
                  topicNumber: 3,
                  topic: "Potential due to a point charge",
                  brief:
                    "The electric potential due to a point charge is proportional to the charge and inversely proportional to the distance from it, with zero potential conventionally taken at infinity.",
                },
                {
                  id: "PHY11-CH21-T04",
                  topicNumber: 4,
                  topic: "Potential due to a system of charges",
                  brief:
                    "The electric potential due to a system of charges is the algebraic sum of the individual potentials because electric potential is a scalar quantity.",
                },
                {
                  id: "PHY11-CH21-T05",
                  topicNumber: 5,
                  topic: "Potential energy of charges",
                  brief:
                    "Electric potential energy describes the energy associated with the positions of charges in an electric field or their mutual electrostatic interactions.",
                },
                {
                  id: "PHY11-CH21-T06",
                  topicNumber: 6,
                  topic: "Potential energy of an electric dipole",
                  brief:
                    "The potential energy of an electric dipole in a uniform electric field depends on its dipole moment, field strength, and orientation.",
                },
                {
                  id: "PHY11-CH21-T07",
                  topicNumber: 7,
                  topic: "Equipotential surfaces",
                  brief:
                    "Equipotential surfaces contain points of equal electric potential, so no work is required to move a charge along the same surface.",
                },
                {
                  id: "PHY11-CH21-T08",
                  topicNumber: 8,
                  topic: "Relation between electric field and potential",
                  brief:
                    "The electric field points in the direction of decreasing potential, and its component along a direction equals the negative rate of potential change in that direction.",
                },
                {
                  id: "PHY11-CH21-T09",
                  topicNumber: 9,
                  topic: "Work done in moving a charge",
                  brief:
                    "The work associated with moving a charge between two points depends on the charge and potential difference, with the sign determined by the direction and type of work considered.",
                },
                {
                  id: "PHY11-CH21-T10",
                  topicNumber: 10,
                  topic: "Electron volt",
                  brief:
                    "An electron volt is the energy gained by an elementary charge moving through a potential difference of one volt, equal to approximately 1.602 × 10⁻¹⁹ joules.",
                },
                {
                  id: "PHY11-CH21-T11",
                  topicNumber: 11,
                  topic: "Applications of electric potential",
                  brief:
                    "Electric potential concepts are used to analyze batteries, electrical circuits, capacitors, electrostatic devices, and the energy of charged particles.",
                },
              ],
            },
            {
              id: "PHY11-CH22",
              chapterNumber: 22,
              chapterName: "Capacitor",
              topics: [
                {
                  id: "PHY11-CH22-T01",
                  topicNumber: 1,
                  topic: "Capacitance",
                  brief:
                    "Capacitance is the ratio of the magnitude of charge stored on a conductor to its electric potential relative to a reference, measured in farads.",
                },
                {
                  id: "PHY11-CH22-T02",
                  topicNumber: 2,
                  topic: "Capacitors",
                  brief:
                    "A capacitor is an electrical component that stores separated electric charges and energy in the electric field between its conductors.",
                },
                {
                  id: "PHY11-CH22-T03",
                  topicNumber: 3,
                  topic: "Parallel-plate capacitor",
                  brief:
                    "A parallel-plate capacitor consists of two parallel conducting plates separated by an insulating gap and has capacitance determined by plate area, separation, and the medium.",
                },
                {
                  id: "PHY11-CH22-T04",
                  topicNumber: 4,
                  topic: "Capacitance and geometry",
                  brief:
                    "Capacitance depends on conductor geometry, the separation of conducting surfaces, and the permittivity of the material between them.",
                },
                {
                  id: "PHY11-CH22-T05",
                  topicNumber: 5,
                  topic: "Effect of dielectric materials",
                  brief:
                    "Inserting a dielectric between capacitor plates generally increases capacitance by reducing the effective electric field for a given free charge.",
                },
                {
                  id: "PHY11-CH22-T06",
                  topicNumber: 6,
                  topic: "Dielectric constant",
                  brief:
                    "The dielectric constant, or relative permittivity, is the ratio of a material's permittivity to the permittivity of free space.",
                },
                {
                  id: "PHY11-CH22-T07",
                  topicNumber: 7,
                  topic: "Combination of capacitors in series",
                  brief:
                    "For capacitors connected in series, each carries the same charge magnitude and the reciprocal of equivalent capacitance equals the sum of the reciprocals of individual capacitances.",
                },
                {
                  id: "PHY11-CH22-T08",
                  topicNumber: 8,
                  topic: "Combination of capacitors in parallel",
                  brief:
                    "For capacitors connected in parallel, each has the same potential difference and the equivalent capacitance equals the sum of their capacitances.",
                },
                {
                  id: "PHY11-CH22-T09",
                  topicNumber: 9,
                  topic: "Energy stored in a capacitor",
                  brief:
                    "The energy stored in a capacitor is the work required to charge it and equals one-half the product of capacitance and voltage squared.",
                },
                {
                  id: "PHY11-CH22-T10",
                  topicNumber: 10,
                  topic: "Energy density of an electric field",
                  brief:
                    "Electric-field energy density is the energy stored per unit volume of an electric field and depends on the field strength and the medium's permittivity.",
                },
                {
                  id: "PHY11-CH22-T11",
                  topicNumber: 11,
                  topic: "Charging and discharging of capacitors",
                  brief:
                    "Charging and discharging describe how a capacitor's charge and voltage change with time through a circuit, often following exponential behaviour in an RC circuit.",
                },
                {
                  id: "PHY11-CH22-T12",
                  topicNumber: 12,
                  topic: "Applications of capacitors",
                  brief:
                    "Capacitors are used for energy storage, signal filtering, timing circuits, power-supply smoothing, coupling, and temporary energy delivery.",
                },
              ],
            },
            {
              id: "PHY11-CH23",
              chapterNumber: 23,
              chapterName: "DC Circuits",
              topics: [
                {
                  id: "PHY11-CH23-T01",
                  topicNumber: 1,
                  topic: "Electric current",
                  brief:
                    "Electric current is the rate of flow of electric charge through a cross-section and is measured in amperes.",
                },
                {
                  id: "PHY11-CH23-T02",
                  topicNumber: 2,
                  topic: "Current density",
                  brief:
                    "Current density is the electric current flowing per unit cross-sectional area, represented as a vector in the direction of conventional current.",
                },
                {
                  id: "PHY11-CH23-T03",
                  topicNumber: 3,
                  topic: "Drift velocity",
                  brief:
                    "Drift velocity is the average net velocity acquired by charge carriers in a conductor under an applied electric field.",
                },
                {
                  id: "PHY11-CH23-T04",
                  topicNumber: 4,
                  topic: "Ohm's law",
                  brief:
                    "Ohm's law states that current is directly proportional to potential difference for a conductor whose physical conditions, such as temperature, remain constant.",
                },
                {
                  id: "PHY11-CH23-T05",
                  topicNumber: 5,
                  topic: "Resistance",
                  brief:
                    "Electrical resistance measures opposition to current flow and is defined as the potential difference across a component divided by its current when this ratio is applicable.",
                },
                {
                  id: "PHY11-CH23-T06",
                  topicNumber: 6,
                  topic: "Resistivity and conductivity",
                  brief:
                    "Resistivity is a material property describing opposition to current flow, while conductivity measures how readily the material conducts electricity and is its reciprocal.",
                },
                {
                  id: "PHY11-CH23-T07",
                  topicNumber: 7,
                  topic: "Factors affecting resistance",
                  brief:
                    "Resistance depends on a conductor's material, length, cross-sectional area, temperature, and physical condition.",
                },
                {
                  id: "PHY11-CH23-T08",
                  topicNumber: 8,
                  topic: "Resistors in series",
                  brief:
                    "Resistors in series carry the same current, and their equivalent resistance equals the sum of their individual resistances.",
                },
                {
                  id: "PHY11-CH23-T09",
                  topicNumber: 9,
                  topic: "Resistors in parallel",
                  brief:
                    "Resistors in parallel share the same potential difference, and the reciprocal of equivalent resistance equals the sum of the reciprocals of individual resistances.",
                },
                {
                  id: "PHY11-CH23-T10",
                  topicNumber: 10,
                  topic: "Electromotive force",
                  brief:
                    "Electromotive force (emf) is the energy supplied by a source per unit charge to drive charge around a complete circuit.",
                },
                {
                  id: "PHY11-CH23-T11",
                  topicNumber: 11,
                  topic: "Internal resistance of a cell",
                  brief:
                    "Internal resistance is the resistance within a cell that causes some of its emf to be lost internally when current flows.",
                },
                {
                  id: "PHY11-CH23-T12",
                  topicNumber: 12,
                  topic: "Terminal potential difference",
                  brief:
                    "Terminal potential difference is the voltage measured across a cell's terminals and may differ from its emf when current flows because of internal resistance.",
                },
                {
                  id: "PHY11-CH23-T13",
                  topicNumber: 13,
                  topic: "Electrical power",
                  brief:
                    "Electrical power is the rate at which electrical energy is transferred or converted, commonly calculated using P = VI.",
                },
                {
                  id: "PHY11-CH23-T14",
                  topicNumber: 14,
                  topic: "Electrical energy",
                  brief:
                    "Electrical energy is the energy transferred by an electric current over time and can be calculated from power multiplied by elapsed time.",
                },
                {
                  id: "PHY11-CH23-T15",
                  topicNumber: 15,
                  topic: "Kirchhoff's laws",
                  brief:
                    "Kirchhoff's current law expresses conservation of charge at a junction, while Kirchhoff's voltage law expresses conservation of energy around a closed circuit loop.",
                },
                {
                  id: "PHY11-CH23-T16",
                  topicNumber: 16,
                  topic: "Electrical measuring instruments",
                  brief:
                    "Electrical measuring instruments such as ammeters, voltmeters, and galvanometers measure current or potential difference and must be connected appropriately to minimize circuit disturbance.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY11-B05",
          branchNumber: 5,
          branchName: "Modern Physics",
          chapters: [
            {
              id: "PHY11-CH24",
              chapterNumber: 24,
              chapterName: "Nuclear Physics",
              topics: [
                {
                  id: "PHY11-CH24-T01",
                  topicNumber: 1,
                  topic: "Structure of the atomic nucleus",
                  brief:
                    "The atomic nucleus is the dense, positively charged central part of an atom. It contains protons and neutrons, collectively called nucleons, and holds nearly all the atom's mass.",
                },
                {
                  id: "PHY11-CH24-T02",
                  topicNumber: 2,
                  topic: "Protons and neutrons",
                  brief:
                    "Protons are positively charged particles, while neutrons have no electric charge. Both are found in the nucleus and contribute to the mass and stability of atoms.",
                },
                {
                  id: "PHY11-CH24-T03",
                  topicNumber: 3,
                  topic: "Atomic number and mass number",
                  brief:
                    "The atomic number (Z) is the number of protons in a nucleus, identifying the element. The mass number (A) is the total number of protons and neutrons, so A = Z + N.",
                },
                {
                  id: "PHY11-CH24-T04",
                  topicNumber: 4,
                  topic: "Isotopes, isobars and isotones",
                  brief:
                    "Isotopes have the same atomic number but different mass numbers. Isobars have the same mass number but different atomic numbers, while isotones have the same number of neutrons.",
                },
                {
                  id: "PHY11-CH24-T05",
                  topicNumber: 5,
                  topic: "Nuclear size and density",
                  brief:
                    "Nuclear size is extremely small and depends on the number of nucleons. The nuclear radius is approximately proportional to the cube root of the mass number, and nuclear density is very high.",
                },
                {
                  id: "PHY11-CH24-T06",
                  topicNumber: 6,
                  topic: "Mass defect",
                  brief:
                    "Mass defect is the difference between the total mass of separate protons and neutrons and the actual mass of the nucleus formed from them. This missing mass corresponds to nuclear binding energy.",
                },
                {
                  id: "PHY11-CH24-T07",
                  topicNumber: 7,
                  topic: "Binding energy",
                  brief:
                    "Nuclear binding energy is the energy required to separate a nucleus completely into its individual protons and neutrons. It is related to mass defect through Einstein's mass-energy relation, E = mc².",
                },
                {
                  id: "PHY11-CH24-T08",
                  topicNumber: 8,
                  topic: "Binding energy per nucleon",
                  brief:
                    "Binding energy per nucleon is the total nuclear binding energy divided by the number of nucleons. It is useful for comparing nuclear stability, with larger values generally indicating more tightly bound nuclei.",
                },
                {
                  id: "PHY11-CH24-T09",
                  topicNumber: 9,
                  topic: "Nuclear stability",
                  brief:
                    "Nuclear stability describes how resistant a nucleus is to spontaneous change or radioactive decay. It depends on factors such as the neutron-to-proton ratio, binding energy and nuclear forces.",
                },
                {
                  id: "PHY11-CH24-T10",
                  topicNumber: 10,
                  topic: "Nuclear forces",
                  brief:
                    "Nuclear forces are strong, short-range interactions between nucleons that help hold the nucleus together. They overcome the electrostatic repulsion between positively charged protons at very small distances.",
                },
                {
                  id: "PHY11-CH24-T11",
                  topicNumber: 11,
                  topic: "Applications of nuclear physics",
                  brief:
                    "Nuclear physics has applications in electricity generation, medical diagnosis and treatment, industrial testing, scientific research, and radiometric dating. These uses involve nuclear reactions, radiation, or radioactive isotopes.",
                },
              ],
            },
            {
              id: "PHY11-CH25",
              chapterNumber: 25,
              chapterName: "Solids",
              topics: [
                {
                  id: "PHY11-CH25-T01",
                  topicNumber: 1,
                  topic: "Classification of solids",
                  brief:
                    "Solids can be classified according to their internal structure and physical properties. Common categories include crystalline and amorphous solids, as well as conductors, insulators and semiconductors based on electrical behavior.",
                },
                {
                  id: "PHY11-CH25-T02",
                  topicNumber: 2,
                  topic: "Crystalline and amorphous solids",
                  brief:
                    "Crystalline solids have particles arranged in a regular, repeating pattern, whereas amorphous solids lack long-range order. Their structures influence properties such as melting behavior and mechanical response.",
                },
                {
                  id: "PHY11-CH25-T03",
                  topicNumber: 3,
                  topic: "Crystal structure",
                  brief:
                    "Crystal structure describes the orderly arrangement of atoms, ions or molecules in a crystalline material. It influences the material's physical, electrical, optical and mechanical properties.",
                },
                {
                  id: "PHY11-CH25-T04",
                  topicNumber: 4,
                  topic: "Lattice and unit cell",
                  brief:
                    "A crystal lattice is a repeating three-dimensional arrangement of points representing the periodic structure of a crystal. A unit cell is the smallest repeating structural unit that can reproduce the lattice through translation.",
                },
                {
                  id: "PHY11-CH25-T05",
                  topicNumber: 5,
                  topic: "Electrical properties of solids",
                  brief:
                    "The electrical properties of solids depend on how electrons move through a material and on its electronic energy bands. These properties determine whether a solid behaves as a conductor, insulator or semiconductor.",
                },
                {
                  id: "PHY11-CH25-T06",
                  topicNumber: 6,
                  topic: "Conductors",
                  brief:
                    "Conductors allow electric charge to flow readily because they contain mobile charge carriers. Metals such as copper and aluminium are common examples used in electrical wiring and circuits.",
                },
                {
                  id: "PHY11-CH25-T07",
                  topicNumber: 7,
                  topic: "Insulators",
                  brief:
                    "Insulators strongly resist the flow of electric current because they have very few freely mobile charge carriers under ordinary conditions. Examples include glass, rubber and many plastics.",
                },
                {
                  id: "PHY11-CH25-T08",
                  topicNumber: 8,
                  topic: "Semiconductors",
                  brief:
                    "Semiconductors have electrical conductivity between that of conductors and insulators, and their conductivity can be controlled by temperature, light or the addition of impurities. Silicon and germanium are common examples.",
                },
                {
                  id: "PHY11-CH25-T09",
                  topicNumber: 9,
                  topic: "Energy bands",
                  brief:
                    "Energy bands are ranges of allowed electron energies in a solid, formed when many atoms interact. The arrangement of these bands helps explain the electrical behavior of conductors, insulators and semiconductors.",
                },
                {
                  id: "PHY11-CH25-T10",
                  topicNumber: 10,
                  topic: "Valence band and conduction band",
                  brief:
                    "The valence band contains electrons associated with bonding, while the conduction band contains energy states in which electrons can move through the material and conduct electricity. The energy gap between these bands helps determine conductivity.",
                },
                {
                  id: "PHY11-CH25-T11",
                  topicNumber: 11,
                  topic: "Applications of solid-state physics",
                  brief:
                    "Solid-state physics explains the behavior of materials and supports technologies such as transistors, integrated circuits, LEDs, solar cells, sensors and memory devices. It is central to modern electronics and materials engineering.",
                },
              ],
            },
            {
              id: "PHY11-CH26",
              chapterNumber: 26,
              chapterName: "Recent Trends in Physics",
              topics: [
                {
                  id: "PHY11-CH26-T01",
                  topicNumber: 1,
                  topic: "Scope of modern physics",
                  brief:
                    "Modern physics studies phenomena that classical physics cannot fully explain, particularly at atomic, subatomic and very high-speed scales. Its major foundations include quantum mechanics and relativity.",
                },
                {
                  id: "PHY11-CH26-T02",
                  topicNumber: 2,
                  topic: "Applications of physics in technology",
                  brief:
                    "Physics underlies technologies such as communication systems, electronic devices, medical imaging, energy production and transportation. Physical principles help engineers design, improve and understand these technologies.",
                },
                {
                  id: "PHY11-CH26-T03",
                  topicNumber: 3,
                  topic: "Nanotechnology",
                  brief:
                    "Nanotechnology involves studying and manipulating materials at approximately 1–100 nanometres, where size-dependent effects can produce distinctive properties. Applications include electronics, medicine, coatings and advanced materials.",
                },
                {
                  id: "PHY11-CH26-T04",
                  topicNumber: 4,
                  topic: "Materials science",
                  brief:
                    "Materials science examines the structure, properties, processing and performance of materials. It combines principles from physics, chemistry and engineering to develop materials for specific applications.",
                },
                {
                  id: "PHY11-CH26-T05",
                  topicNumber: 5,
                  topic: "Lasers and their applications",
                  brief:
                    "A laser produces a concentrated beam of light through stimulated emission of radiation. Lasers are used in communication, medical procedures, manufacturing, measurement and scientific research.",
                },
                {
                  id: "PHY11-CH26-T06",
                  topicNumber: 6,
                  topic: "Optoelectronics",
                  brief:
                    "Optoelectronics studies devices that generate, detect or control light using electronic processes. Examples include LEDs, laser diodes, photodetectors, optical communication systems and solar cells.",
                },
                {
                  id: "PHY11-CH26-T07",
                  topicNumber: 7,
                  topic: "Superconductivity",
                  brief:
                    "Superconductivity is a phenomenon in which certain materials exhibit zero electrical resistance below a characteristic critical temperature. Superconductors can also expel magnetic fields and are used in technologies such as powerful magnets and specialized sensors.",
                },
                {
                  id: "PHY11-CH26-T08",
                  topicNumber: 8,
                  topic: "Medical applications of physics",
                  brief:
                    "Physics supports medical diagnosis and treatment through technologies such as X-rays, CT scans, MRI, ultrasound, radiation therapy and nuclear medicine. These techniques use physical principles to examine or treat the human body.",
                },
                {
                  id: "PHY11-CH26-T09",
                  topicNumber: 9,
                  topic: "Environmental applications of physics",
                  brief:
                    "Physics helps monitor and address environmental issues through remote sensing, atmospheric measurements, renewable energy, radiation detection and climate studies. It also supports the development of efficient energy and pollution-control technologies.",
                },
                {
                  id: "PHY11-CH26-T10",
                  topicNumber: 10,
                  topic: "Emerging areas of physics",
                  brief:
                    "Emerging areas of physics include quantum information, quantum computing, advanced photonics, particle physics, gravitational-wave research and new energy materials. These fields explore fundamental phenomena and create possibilities for future technologies.",
                },
              ],
            },
          ],
        },
      ],
    },
    "12": {
      id: "PHY12",
      grade: 12,
      subject: "Physics",
      branches: [
        {
          id: "PHY12-B01",
          branchNumber: 1,
          branchName: "Mechanics",
          chapters: [
            {
              id: "PHY12-CH01",
              chapterNumber: 1,
              chapterName: "Rotational Dynamics",
              topics: [
                {
                  id: "PHY12-CH01-T01",
                  topicNumber: 1,
                  topic: "Angular displacement, velocity and acceleration",
                  brief:
                    "Angular displacement describes the angle through which an object rotates. Angular velocity measures the rate of change of angular displacement, while angular acceleration measures the rate of change of angular velocity.",
                },
                {
                  id: "PHY12-CH01-T02",
                  topicNumber: 2,
                  topic: "Torque",
                  brief:
                    "Torque is the turning effect of a force about an axis or pivot. It depends on the magnitude of the force and the perpendicular distance between the axis and the force's line of action.",
                },
                {
                  id: "PHY12-CH01-T03",
                  topicNumber: 3,
                  topic: "Moment of force",
                  brief:
                    "The moment of force is the product of a force and its perpendicular distance from a pivot or axis of rotation. It determines the tendency of the force to rotate an object.",
                },
                {
                  id: "PHY12-CH01-T04",
                  topicNumber: 4,
                  topic: "Moment of inertia",
                  brief:
                    "Moment of inertia measures an object's resistance to changes in rotational motion about a particular axis. It depends on the mass of the object and how that mass is distributed relative to the axis.",
                },
                {
                  id: "PHY12-CH01-T05",
                  topicNumber: 5,
                  topic: "Radius of gyration",
                  brief:
                    "The radius of gyration is the distance from an axis at which the entire mass of an object could be concentrated without changing its moment of inertia. It relates moment of inertia to total mass.",
                },
                {
                  id: "PHY12-CH01-T06",
                  topicNumber: 6,
                  topic: "Angular momentum",
                  brief:
                    "Angular momentum is a measure of rotational motion. For a rigid body rotating about a fixed principal axis, it is equal to the product of its moment of inertia and angular velocity.",
                },
                {
                  id: "PHY12-CH01-T07",
                  topicNumber: 7,
                  topic: "Conservation of angular momentum",
                  brief:
                    "Angular momentum remains constant in a system when the net external torque acting on it is zero. This principle explains phenomena such as a spinning skater rotating faster when pulling their arms inward.",
                },
                {
                  id: "PHY12-CH01-T08",
                  topicNumber: 8,
                  topic: "Rotational kinetic energy",
                  brief:
                    "Rotational kinetic energy is the energy possessed by a rotating object. For a rigid body rotating about a fixed axis, it depends on the moment of inertia and the square of its angular velocity.",
                },
                {
                  id: "PHY12-CH01-T09",
                  topicNumber: 9,
                  topic: "Rotational equations of motion",
                  brief:
                    "Rotational equations of motion describe the relationship between angular displacement, angular velocity, angular acceleration and time. For constant angular acceleration, they parallel the equations used for linear motion.",
                },
                {
                  id: "PHY12-CH01-T10",
                  topicNumber: 10,
                  topic: "Parallel-axis theorem",
                  brief:
                    "The parallel-axis theorem relates the moment of inertia about an axis to the moment of inertia about a parallel axis through the centre of mass. The difference depends on the object's mass and the distance between the axes.",
                },
                {
                  id: "PHY12-CH01-T11",
                  topicNumber: 11,
                  topic: "Perpendicular-axis theorem",
                  brief:
                    "The perpendicular-axis theorem states that for a thin planar lamina, the moment of inertia about an axis perpendicular to its plane equals the sum of the moments of inertia about two mutually perpendicular axes in the plane that intersect at the same point.",
                },
                {
                  id: "PHY12-CH01-T12",
                  topicNumber: 12,
                  topic: "Rolling motion",
                  brief:
                    "Rolling motion combines translational motion of an object's centre of mass with rotation about its centre. For rolling without slipping, the linear speed of the centre is related to angular speed by the object's radius.",
                },
                {
                  id: "PHY12-CH01-T13",
                  topicNumber: 13,
                  topic: "Rotational equilibrium",
                  brief:
                    "Rotational equilibrium occurs when the net torque acting on an object is zero. For complete static equilibrium, both the net force and the net torque must be zero.",
                },
                {
                  id: "PHY12-CH01-T14",
                  topicNumber: 14,
                  topic: "Applications of rotational dynamics",
                  brief:
                    "Rotational dynamics explains the operation of wheels, gears, turbines, flywheels, rotating machinery and many sports movements. It helps predict angular acceleration, torque, rotational energy and stability.",
                },
              ],
            },
            {
              id: "PHY12-CH02",
              chapterNumber: 2,
              chapterName: "Periodic Motion",
              topics: [
                {
                  id: "PHY12-CH02-T01",
                  topicNumber: 1,
                  topic: "Periodic motion",
                  brief:
                    "Periodic motion is motion that repeats itself at regular time intervals. Examples include the motion of a pendulum, the rotation of a wheel and the Earth's revolution around the Sun.",
                },
                {
                  id: "PHY12-CH02-T02",
                  topicNumber: 2,
                  topic: "Oscillatory motion",
                  brief:
                    "Oscillatory motion is repeated movement to and fro about an equilibrium position. It commonly occurs when a restoring force tends to return a displaced object toward equilibrium.",
                },
                {
                  id: "PHY12-CH02-T03",
                  topicNumber: 3,
                  topic: "Simple harmonic motion",
                  brief:
                    "Simple harmonic motion (SHM) is oscillatory motion in which acceleration is directly proportional to displacement from equilibrium and directed toward that equilibrium. It is an ideal model for many vibrating systems.",
                },
                {
                  id: "PHY12-CH02-T04",
                  topicNumber: 4,
                  topic: "Conditions for simple harmonic motion",
                  brief:
                    "For simple harmonic motion, the restoring force or acceleration must be proportional to displacement and opposite in direction. This condition is often satisfied approximately for small oscillations near a stable equilibrium.",
                },
                {
                  id: "PHY12-CH02-T05",
                  topicNumber: 5,
                  topic: "Displacement, velocity and acceleration in SHM",
                  brief:
                    "In SHM, displacement varies sinusoidally with time. Velocity is greatest at the equilibrium position and zero at the extreme positions, while acceleration is directed toward equilibrium and has its greatest magnitude at the extremes.",
                },
                {
                  id: "PHY12-CH02-T06",
                  topicNumber: 6,
                  topic: "Amplitude, frequency and period",
                  brief:
                    "Amplitude is the maximum displacement from equilibrium. Frequency is the number of complete oscillations per second, measured in hertz, and period is the time taken for one complete oscillation.",
                },
                {
                  id: "PHY12-CH02-T07",
                  topicNumber: 7,
                  topic: "Phase and phase difference",
                  brief:
                    "Phase describes the state of an oscillating system at a particular time, including its position and direction of motion. Phase difference indicates how far two oscillations are shifted relative to each other in their cycles.",
                },
                {
                  id: "PHY12-CH02-T08",
                  topicNumber: 8,
                  topic: "Force and energy in SHM",
                  brief:
                    "In SHM, the restoring force is proportional to displacement and directed toward equilibrium. Kinetic and potential energy continuously transform into each other, while their sum remains constant in an ideal undamped system.",
                },
                {
                  id: "PHY12-CH02-T09",
                  topicNumber: 9,
                  topic: "Spring-mass system",
                  brief:
                    "A spring-mass system oscillates when a mass attached to a spring is displaced from equilibrium and released. For an ideal spring obeying Hooke's law, the oscillation period depends on the mass and spring constant.",
                },
                {
                  id: "PHY12-CH02-T10",
                  topicNumber: 10,
                  topic: "Simple pendulum",
                  brief:
                    "A simple pendulum consists of a small mass suspended from a fixed point by a light string. For small angular displacements, it approximates SHM, and its period depends mainly on the string length and gravitational acceleration.",
                },
                {
                  id: "PHY12-CH02-T11",
                  topicNumber: 11,
                  topic: "Energy conservation in SHM",
                  brief:
                    "In ideal SHM, the total mechanical energy remains constant as kinetic and potential energy change during oscillation. Kinetic energy is maximum at equilibrium, while potential energy is maximum at the extreme positions.",
                },
                {
                  id: "PHY12-CH02-T12",
                  topicNumber: 12,
                  topic: "Damped oscillations",
                  brief:
                    "Damped oscillations occur when resistive forces, such as friction or air resistance, remove energy from an oscillating system. As a result, the amplitude generally decreases over time.",
                },
                {
                  id: "PHY12-CH02-T13",
                  topicNumber: 13,
                  topic: "Forced oscillations",
                  brief:
                    "Forced oscillations occur when an external periodic force drives an oscillating system. The resulting motion depends on the driving frequency, the system's natural frequency and the amount of damping.",
                },
                {
                  id: "PHY12-CH02-T14",
                  topicNumber: 14,
                  topic: "Resonance",
                  brief:
                    "Resonance occurs when a periodic driving force has a frequency close to a system's natural frequency, producing a large response under suitable conditions. Damping limits the amplitude and affects the frequency at which the maximum response occurs.",
                },
              ],
            },
            {
              id: "PHY12-CH03",
              chapterNumber: 3,
              chapterName: "Fluid Mechanics",
              topics: [
                {
                  id: "PHY12-CH03-T01",
                  topicNumber: 1,
                  topic: "Fluids and their properties",
                  brief:
                    "Fluids are substances that can flow and take the shape of their containers, including liquids and gases. Their behavior is described by properties such as density, pressure, viscosity and surface tension.",
                },
                {
                  id: "PHY12-CH03-T02",
                  topicNumber: 2,
                  topic: "Density and pressure",
                  brief:
                    "Density is the mass of a substance per unit volume. Pressure is the perpendicular force exerted per unit area and describes how forces are distributed within fluids and at their boundaries.",
                },
                {
                  id: "PHY12-CH03-T03",
                  topicNumber: 3,
                  topic: "Pressure variation with depth",
                  brief:
                    "In a fluid at rest, pressure increases with depth because of the weight of the fluid above. For a fluid of constant density, the gauge pressure at depth depends on density, gravitational acceleration and depth.",
                },
                {
                  id: "PHY12-CH03-T04",
                  topicNumber: 4,
                  topic: "Pascal's law",
                  brief:
                    "Pascal's law states that a pressure change applied to an enclosed fluid is transmitted undiminished throughout the fluid and to the container walls. This principle is used in hydraulic systems.",
                },
                {
                  id: "PHY12-CH03-T05",
                  topicNumber: 5,
                  topic: "Hydraulic machines",
                  brief:
                    "Hydraulic machines use pressure transmission in fluids to transfer or multiply force. Examples include hydraulic presses, lifts and braking systems, where a small force applied over a small area can produce a larger force over a larger area.",
                },
                {
                  id: "PHY12-CH03-T06",
                  topicNumber: 6,
                  topic: "Archimedes' principle",
                  brief:
                    "Archimedes' principle states that an object immersed partly or fully in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces. This principle helps explain floating and sinking.",
                },
                {
                  id: "PHY12-CH03-T07",
                  topicNumber: 7,
                  topic: "Buoyant force",
                  brief:
                    "Buoyant force is the upward force exerted by a fluid on an immersed or floating object because fluid pressure generally increases with depth. Its magnitude equals the weight of the displaced fluid under ordinary hydrostatic conditions.",
                },
                {
                  id: "PHY12-CH03-T08",
                  topicNumber: 8,
                  topic: "Surface tension",
                  brief:
                    "Surface tension is the tendency of a liquid surface to behave like a stretched membrane due to cohesive forces between its molecules. It explains phenomena such as the formation of droplets and the ability of some small insects to stand on water.",
                },
                {
                  id: "PHY12-CH03-T09",
                  topicNumber: 9,
                  topic: "Surface energy",
                  brief:
                    "Surface energy is the energy associated with creating or increasing the surface area of a liquid or material. For a liquid under suitable conditions, increasing the surface area requires work against surface tension.",
                },
                {
                  id: "PHY12-CH03-T10",
                  topicNumber: 10,
                  topic: "Capillarity",
                  brief:
                    "Capillarity is the rise or fall of a liquid in a narrow tube or small space due to surface tension and adhesive and cohesive forces. The direction and height of the effect depend on the liquid, the surrounding material and the tube's dimensions.",
                },
                {
                  id: "PHY12-CH03-T11",
                  topicNumber: 11,
                  topic: "Viscosity",
                  brief:
                    "Viscosity measures a fluid's resistance to flow or internal deformation. Highly viscous fluids, such as honey, flow more slowly than less viscous fluids, such as water, under comparable conditions.",
                },
                {
                  id: "PHY12-CH03-T12",
                  topicNumber: 12,
                  topic: "Stokes' law",
                  brief:
                    "Stokes' law gives the viscous drag force on a small sphere moving slowly through a fluid under laminar-flow conditions. The drag depends on the fluid's viscosity, the sphere's radius and its speed relative to the fluid.",
                },
                {
                  id: "PHY12-CH03-T13",
                  topicNumber: 13,
                  topic: "Terminal velocity",
                  brief:
                    "Terminal velocity is the constant speed reached by an object moving through a fluid when the net force on it becomes zero. At this point, the object's weight is balanced by buoyancy and drag, where applicable.",
                },
                {
                  id: "PHY12-CH03-T14",
                  topicNumber: 14,
                  topic: "Equation of continuity",
                  brief:
                    "The equation of continuity expresses conservation of mass in fluid flow. For steady flow of an incompressible fluid through a tube, the product of cross-sectional area and flow speed remains constant.",
                },
                {
                  id: "PHY12-CH03-T15",
                  topicNumber: 15,
                  topic: "Bernoulli's principle",
                  brief:
                    "Bernoulli's principle relates pressure, fluid speed and height along a streamline in steady, incompressible, non-viscous flow. Under these ideal conditions, an increase in fluid speed is associated with a decrease in static pressure when other factors are unchanged.",
                },
                {
                  id: "PHY12-CH03-T16",
                  topicNumber: 16,
                  topic: "Applications of fluid mechanics",
                  brief:
                    "Fluid mechanics is applied in hydraulic machinery, water supply systems, aircraft aerodynamics, ship design, blood-flow studies and weather forecasting. It helps explain fluid pressure, buoyancy, flow rate and resistance to motion.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY12-B02",
          branchNumber: 2,
          branchName: "Heat and Thermodynamics",
          chapters: [
            {
              id: "PHY12-CH04",
              chapterNumber: 4,
              chapterName: "First Law of Thermodynamics",
              topics: [
                {
                  id: "PHY12-CH04-T01",
                  topicNumber: 1,
                  topic: "Thermodynamic systems",
                  brief:
                    "A thermodynamic system is a defined quantity of matter or region of space selected for study. Systems are classified as open, closed or isolated depending on whether they exchange matter and energy with their surroundings.",
                },
                {
                  id: "PHY12-CH04-T02",
                  topicNumber: 2,
                  topic: "Thermodynamic state variables",
                  brief:
                    "Thermodynamic state variables describe the condition of a system. Common examples include pressure, volume, temperature and internal energy, which help determine the system's physical state.",
                },
                {
                  id: "PHY12-CH04-T03",
                  topicNumber: 3,
                  topic: "Thermal equilibrium",
                  brief:
                    "Thermal equilibrium occurs when bodies in thermal contact have the same temperature and there is no net heat transfer between them. The zeroth law of thermodynamics establishes the basis for comparing temperatures.",
                },
                {
                  id: "PHY12-CH04-T04",
                  topicNumber: 4,
                  topic: "Heat and work",
                  brief:
                    "Heat is energy transferred between systems because of a temperature difference, while work is energy transferred through other mechanisms, such as the expansion of a gas. Both represent energy transfer rather than properties stored in a system.",
                },
                {
                  id: "PHY12-CH04-T05",
                  topicNumber: 5,
                  topic: "Internal energy",
                  brief:
                    "Internal energy is the total microscopic kinetic and potential energy of the particles within a system. It can change when heat is supplied to or removed from the system or when work is done.",
                },
                {
                  id: "PHY12-CH04-T06",
                  topicNumber: 6,
                  topic: "First law of thermodynamics",
                  brief:
                    "The first law of thermodynamics expresses conservation of energy in thermodynamic processes. Using the convention that work done by the system is positive, the change in internal energy equals heat supplied to the system minus work done by it.",
                },
                {
                  id: "PHY12-CH04-T07",
                  topicNumber: 7,
                  topic: "Thermodynamic processes",
                  brief:
                    "A thermodynamic process is a change in the state of a system involving variables such as pressure, volume and temperature. Common processes include isothermal, adiabatic, isobaric and isochoric changes.",
                },
                {
                  id: "PHY12-CH04-T08",
                  topicNumber: 8,
                  topic: "Isothermal process",
                  brief:
                    "An isothermal process occurs at constant temperature. For an ideal gas, internal energy depends only on temperature, so its change in internal energy is zero during an isothermal process.",
                },
                {
                  id: "PHY12-CH04-T09",
                  topicNumber: 9,
                  topic: "Adiabatic process",
                  brief:
                    "An adiabatic process occurs without heat transfer between the system and its surroundings. Changes in internal energy result from work done on or by the system.",
                },
                {
                  id: "PHY12-CH04-T10",
                  topicNumber: 10,
                  topic: "Isobaric process",
                  brief:
                    "An isobaric process takes place at constant pressure. When a gas expands or contracts, work is done as its volume changes, and heat transfer may change its internal energy and temperature.",
                },
                {
                  id: "PHY12-CH04-T11",
                  topicNumber: 11,
                  topic: "Isochoric process",
                  brief:
                    "An isochoric process occurs at constant volume. Since the volume does not change, boundary work done by the system is zero, so any heat transfer changes its internal energy.",
                },
                {
                  id: "PHY12-CH04-T12",
                  topicNumber: 12,
                  topic: "Work done by a gas",
                  brief:
                    "Work done by a gas occurs when it expands against an external pressure or compresses under an applied pressure. For a quasistatic process, the work is represented by the integral of pressure with respect to volume.",
                },
                {
                  id: "PHY12-CH04-T13",
                  topicNumber: 13,
                  topic: "P-V diagrams",
                  brief:
                    "A pressure-volume diagram represents thermodynamic changes by plotting pressure against volume. The area under a process curve gives the work done by the gas, while a closed cycle's signed area represents the net work over the cycle.",
                },
                {
                  id: "PHY12-CH04-T14",
                  topicNumber: 14,
                  topic: "Molar heat capacities of gases",
                  brief:
                    "Molar heat capacity is the heat required to raise the temperature of one mole of a substance by one kelvin under specified conditions. For gases, the molar heat capacities at constant pressure and constant volume are commonly denoted by Cp and Cv.",
                },
                {
                  id: "PHY12-CH04-T15",
                  topicNumber: 15,
                  topic: "Relation between specific heat capacities",
                  brief:
                    "For an ideal gas, the molar heat capacities at constant pressure and constant volume are related by Mayer's relation, Cp − Cv = R, where R is the universal gas constant. The heat-capacity ratio Cp/Cv is important in describing adiabatic processes.",
                },
                {
                  id: "PHY12-CH04-T16",
                  topicNumber: 16,
                  topic: "Applications of the first law",
                  brief:
                    "The first law is used to analyze energy transfer in engines, refrigerators, gas compression, expansion and heating processes. It helps calculate heat exchanged, work done and changes in internal energy.",
                },
              ],
            },
            {
              id: "PHY12-CH05",
              chapterNumber: 5,
              chapterName: "Second Law of Thermodynamics",
              topics: [
                {
                  id: "PHY12-CH05-T01",
                  topicNumber: 1,
                  topic: "Limitations of the first law",
                  brief:
                    "The first law states that energy is conserved but does not determine the natural direction of a process. It cannot by itself explain why heat flows spontaneously from a hotter body to a colder one or why heat engines cannot convert all absorbed heat into work in a cycle.",
                },
                {
                  id: "PHY12-CH05-T02",
                  topicNumber: 2,
                  topic: "Second law of thermodynamics",
                  brief:
                    "The second law describes the direction of natural processes and limits the conversion of heat into work. It can be expressed through the Clausius statement or the Kelvin–Planck statement and is closely related to entropy.",
                },
                {
                  id: "PHY12-CH05-T03",
                  topicNumber: 3,
                  topic: "Reversible processes",
                  brief:
                    "A reversible process is an idealized process that can be reversed so that both the system and its surroundings return to their initial states without leaving any net change. It proceeds through equilibrium states and involves no dissipative effects.",
                },
                {
                  id: "PHY12-CH05-T04",
                  topicNumber: 4,
                  topic: "Irreversible processes",
                  brief:
                    "An irreversible process cannot be reversed without leaving a net change in the system or its surroundings. Examples include heat transfer across a finite temperature difference, friction and the free expansion of a gas.",
                },
                {
                  id: "PHY12-CH05-T05",
                  topicNumber: 5,
                  topic: "Heat engines",
                  brief:
                    "A heat engine operates in a cycle, absorbing heat from a high-temperature source, converting part of that energy into work and releasing the remaining heat to a lower-temperature sink. Examples include steam engines and internal combustion engines.",
                },
                {
                  id: "PHY12-CH05-T06",
                  topicNumber: 6,
                  topic: "Efficiency of heat engines",
                  brief:
                    "The efficiency of a heat engine is the ratio of useful work output to heat absorbed from the hot reservoir. It is always less than 100 percent for an engine operating in a cycle between finite-temperature reservoirs.",
                },
                {
                  id: "PHY12-CH05-T07",
                  topicNumber: 7,
                  topic: "Refrigerators",
                  brief:
                    "A refrigerator uses external work to transfer heat from a colder region to a warmer environment. It operates cyclically and requires energy because heat does not spontaneously flow from cold to hot.",
                },
                {
                  id: "PHY12-CH05-T08",
                  topicNumber: 8,
                  topic: "Coefficient of performance",
                  brief:
                    "The coefficient of performance (COP) measures the effectiveness of a refrigerator or heat pump. For a refrigerator, it is the heat removed from the cold region divided by the work input; for a heat pump, it is the heat delivered to the warm region divided by the work input.",
                },
                {
                  id: "PHY12-CH05-T09",
                  topicNumber: 9,
                  topic: "Carnot cycle",
                  brief:
                    "The Carnot cycle is an ideal reversible cycle consisting of two isothermal processes and two adiabatic processes. It provides a theoretical model for the maximum efficiency achievable by a heat engine operating between two fixed temperatures.",
                },
                {
                  id: "PHY12-CH05-T10",
                  topicNumber: 10,
                  topic: "Carnot engine",
                  brief:
                    "A Carnot engine is an ideal heat engine that operates on a reversible Carnot cycle between hot and cold reservoirs. Its efficiency depends only on the absolute temperatures of the reservoirs, not on the working substance.",
                },
                {
                  id: "PHY12-CH05-T11",
                  topicNumber: 11,
                  topic: "Carnot theorem",
                  brief:
                    "Carnot's theorem states that no engine operating between two fixed-temperature reservoirs can be more efficient than a reversible engine operating between the same reservoirs. All reversible engines working between those temperatures have the same efficiency.",
                },
                {
                  id: "PHY12-CH05-T12",
                  topicNumber: 12,
                  topic: "Entropy",
                  brief:
                    "Entropy is a thermodynamic state function that describes energy dispersal and the direction of spontaneous change. For a reversible heat transfer, its change is defined as the heat transferred divided by the absolute temperature.",
                },
                {
                  id: "PHY12-CH05-T13",
                  topicNumber: 13,
                  topic: "Direction of natural processes",
                  brief:
                    "Natural processes proceed in a preferred direction, such as heat flowing from hot to cold or gases spreading to occupy an available volume. For an isolated system, the total entropy does not decrease in a spontaneous process.",
                },
                {
                  id: "PHY12-CH05-T14",
                  topicNumber: 14,
                  topic: "Applications of the second law",
                  brief:
                    "The second law helps determine the maximum possible efficiency of heat engines, the performance of refrigerators and heat pumps, and the feasibility and direction of thermodynamic processes. It also explains why real energy conversions involve irreversible effects.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY12-B03",
          branchNumber: 3,
          branchName: "Waves and Optics",
          chapters: [
            {
              id: "PHY12-CH06",
              chapterNumber: 6,
              chapterName: "Wave Motion",
              topics: [
                {
                  id: "PHY12-CH06-T01",
                  topicNumber: 1,
                  topic: "Wave motion",
                  brief:
                    "Wave motion is the transfer of energy from one point to another through oscillations or disturbances, without the overall transfer of matter. Waves can travel through a medium or through space, depending on their nature.",
                },
                {
                  id: "PHY12-CH06-T02",
                  topicNumber: 2,
                  topic: "Mechanical and electromagnetic waves",
                  brief:
                    "Mechanical waves require a material medium to propagate, while electromagnetic waves can travel through a vacuum. Sound and water waves are mechanical examples, whereas light and radio waves are electromagnetic.",
                },
                {
                  id: "PHY12-CH06-T03",
                  topicNumber: 3,
                  topic: "Transverse waves",
                  brief:
                    "Transverse waves are waves in which particles of the medium oscillate perpendicular to the direction of wave propagation. Examples include waves on a stretched string and electromagnetic waves.",
                },
                {
                  id: "PHY12-CH06-T04",
                  topicNumber: 4,
                  topic: "Longitudinal waves",
                  brief:
                    "Longitudinal waves are waves in which particles of the medium oscillate parallel to the direction of wave propagation. They consist of compressions and rarefactions, as seen in sound waves travelling through air.",
                },
                {
                  id: "PHY12-CH06-T05",
                  topicNumber: 5,
                  topic: "Progressive waves",
                  brief:
                    "Progressive waves travel continuously from one region to another, transferring energy through a medium or space. In an ideal uniform medium, the wave pattern advances while individual particles or field components oscillate about their equilibrium values.",
                },
                {
                  id: "PHY12-CH06-T06",
                  topicNumber: 6,
                  topic: "Wavelength",
                  brief:
                    "Wavelength is the distance between two successive points in the same phase of a wave, such as adjacent crests or compressions. It is commonly represented by the symbol λ and measured in metres.",
                },
                {
                  id: "PHY12-CH06-T07",
                  topicNumber: 7,
                  topic: "Frequency and period",
                  brief:
                    "Frequency is the number of complete oscillations or wave cycles per second, measured in hertz. The period is the time taken for one complete cycle, and it is the reciprocal of frequency.",
                },
                {
                  id: "PHY12-CH06-T08",
                  topicNumber: 8,
                  topic: "Wave speed",
                  brief:
                    "Wave speed is the distance travelled by a wave per unit time. For a periodic wave, it is related to frequency and wavelength by the equation v = fλ.",
                },
                {
                  id: "PHY12-CH06-T09",
                  topicNumber: 9,
                  topic: "Amplitude and phase",
                  brief:
                    "Amplitude is the maximum displacement of an oscillating quantity from its equilibrium value. Phase describes the stage of a wave cycle at a particular position and time, helping determine the relative states of different oscillations.",
                },
                {
                  id: "PHY12-CH06-T10",
                  topicNumber: 10,
                  topic: "Wave equation",
                  brief:
                    "The wave equation mathematically describes how a wave disturbance varies with position and time. A sinusoidal progressive wave can be represented using its amplitude, angular frequency, wave number and phase constant.",
                },
                {
                  id: "PHY12-CH06-T11",
                  topicNumber: 11,
                  topic: "Displacement of particles in a wave",
                  brief:
                    "In a mechanical wave, particles of the medium oscillate around their equilibrium positions as the disturbance passes. Their displacement depends on position and time, while the wave carries energy through the medium.",
                },
                {
                  id: "PHY12-CH06-T12",
                  topicNumber: 12,
                  topic: "Energy transmission by waves",
                  brief:
                    "Waves transmit energy from one location to another without requiring a net transfer of matter. The amount of energy transported depends on factors such as amplitude, frequency and the properties of the medium.",
                },
                {
                  id: "PHY12-CH06-T13",
                  topicNumber: 13,
                  topic: "Superposition of waves",
                  brief:
                    "The principle of superposition states that when two or more waves overlap in a linear medium, the resultant displacement is the algebraic sum of their individual displacements. This principle explains interference and the formation of stationary waves.",
                },
                {
                  id: "PHY12-CH06-T14",
                  topicNumber: 14,
                  topic: "Reflection and transmission of waves",
                  brief:
                    "Reflection occurs when a wave encounters a boundary and returns into its original medium, while transmission occurs when part or all of the wave passes into another medium. The proportions reflected and transmitted depend on the boundary and the properties of the media.",
                },
              ],
            },
            {
              id: "PHY12-CH07",
              chapterNumber: 7,
              chapterName: "Mechanical Waves",
              topics: [
                {
                  id: "PHY12-CH07-T01",
                  topicNumber: 1,
                  topic: "Mechanical wave propagation",
                  brief:
                    "Mechanical wave propagation occurs when a disturbance travels through a material medium through interactions between its particles. The medium's elasticity, density and physical state influence how the wave travels.",
                },
                {
                  id: "PHY12-CH07-T02",
                  topicNumber: 2,
                  topic: "Sound waves",
                  brief:
                    "Sound waves are mechanical disturbances produced by vibrating sources and transmitted through a medium. In air and other fluids, sound generally propagates as longitudinal pressure waves consisting of compressions and rarefactions.",
                },
                {
                  id: "PHY12-CH07-T03",
                  topicNumber: 3,
                  topic: "Speed of sound",
                  brief:
                    "The speed of sound is the distance a sound wave travels per unit time through a medium. It depends on the medium's elastic properties, density and temperature.",
                },
                {
                  id: "PHY12-CH07-T04",
                  topicNumber: 4,
                  topic: "Factors affecting the speed of sound",
                  brief:
                    "The speed of sound depends on the elasticity and density of the medium, as well as conditions such as temperature. In gases, temperature has a significant influence, while the composition and humidity of air can also affect sound speed.",
                },
                {
                  id: "PHY12-CH07-T05",
                  topicNumber: 5,
                  topic: "Sound in gases",
                  brief:
                    "Sound travels through gases as longitudinal pressure variations caused by the oscillation of gas molecules. Its speed depends on the gas's temperature, molecular properties and ratio of specific heat capacities.",
                },
                {
                  id: "PHY12-CH07-T06",
                  topicNumber: 6,
                  topic: "Newton's formula for the speed of sound",
                  brief:
                    "Newton estimated the speed of sound in a gas by treating the compression and expansion of the gas as isothermal. His formula relates sound speed to pressure and density but underestimates the observed speed in air because the thermal changes during sound propagation are not adequately represented.",
                },
                {
                  id: "PHY12-CH07-T07",
                  topicNumber: 7,
                  topic: "Laplace's correction",
                  brief:
                    "Laplace corrected Newton's formula by recognizing that compressions and rarefactions in sound waves occur approximately adiabatically. The corrected expression includes the ratio of specific heat capacities and gives a more accurate value for the speed of sound in gases.",
                },
                {
                  id: "PHY12-CH07-T08",
                  topicNumber: 8,
                  topic: "Intensity of sound",
                  brief:
                    "Sound intensity is the sound energy passing per unit time through a unit area perpendicular to the direction of propagation. It is measured in watts per square metre and depends on the wave's amplitude and the properties of the medium.",
                },
                {
                  id: "PHY12-CH07-T09",
                  topicNumber: 9,
                  topic: "Sound level",
                  brief:
                    "Sound level expresses sound intensity on a logarithmic scale relative to a reference intensity. This approach is useful because the range of sound intensities detectable by human hearing is extremely wide.",
                },
                {
                  id: "PHY12-CH07-T10",
                  topicNumber: 10,
                  topic: "Decibel scale",
                  brief:
                    "The decibel scale expresses sound intensity level logarithmically, usually relative to a reference intensity of 10⁻¹² watts per square metre in air. A change of 10 decibels corresponds to a tenfold change in intensity.",
                },
                {
                  id: "PHY12-CH07-T11",
                  topicNumber: 11,
                  topic: "Interference of sound waves",
                  brief:
                    "Interference occurs when sound waves overlap and combine through superposition. Depending on their relative phase, they can reinforce one another through constructive interference or reduce the resulting sound through destructive interference.",
                },
                {
                  id: "PHY12-CH07-T12",
                  topicNumber: 12,
                  topic: "Beats",
                  brief:
                    "Beats are periodic variations in sound intensity produced when two sound waves of slightly different frequencies overlap. The beat frequency is equal to the absolute difference between the two frequencies.",
                },
                {
                  id: "PHY12-CH07-T13",
                  topicNumber: 13,
                  topic: "Applications of mechanical waves",
                  brief:
                    "Mechanical waves are used in communication, musical instruments, seismic studies, medical ultrasonography and industrial testing. Understanding their propagation and interactions helps explain how sound and vibrations transfer energy through materials.",
                },
              ],
            },
            {
              id: "PHY12-CH08",
              chapterNumber: 8,
              chapterName: "Waves in Pipes and Strings",
              topics: [
                {
                  id: "PHY12-CH08-T01",
                  topicNumber: 1,
                  topic: "Standing waves",
                  brief:
                    "Standing waves are formed when two waves of the same frequency and comparable amplitude travel in opposite directions and interfere. The resulting pattern contains fixed nodes and antinodes and has no net propagation of the overall pattern.",
                },
                {
                  id: "PHY12-CH08-T02",
                  topicNumber: 2,
                  topic: "Formation of stationary waves",
                  brief:
                    "Stationary waves form when an incident wave interferes with a reflected wave travelling in the opposite direction. The boundary conditions determine the positions of nodes, antinodes and the allowed resonant frequencies.",
                },
                {
                  id: "PHY12-CH08-T03",
                  topicNumber: 3,
                  topic: "Nodes and antinodes",
                  brief:
                    "Nodes are points in a standing wave where displacement remains zero, while antinodes are points where the displacement amplitude is maximum. Their positions depend on the wavelength and the wave's boundary conditions.",
                },
                {
                  id: "PHY12-CH08-T04",
                  topicNumber: 4,
                  topic: "Vibrating strings",
                  brief:
                    "A stretched string can vibrate in different modes when disturbed, producing standing waves. Its allowed frequencies depend on the string's length, tension, linear mass density and the conditions at its ends.",
                },
                {
                  id: "PHY12-CH08-T05",
                  topicNumber: 5,
                  topic: "Fundamental frequency of a string",
                  brief:
                    "The fundamental frequency is the lowest natural frequency at which a string vibrates. For an ideal string fixed at both ends, it depends on the string's length, tension and mass per unit length.",
                },
                {
                  id: "PHY12-CH08-T06",
                  topicNumber: 6,
                  topic: "Harmonics in strings",
                  brief:
                    "Harmonics are frequencies of a vibrating string that are integer multiples of its fundamental frequency. Each harmonic corresponds to a particular standing-wave pattern with a specific number of segments or loops.",
                },
                {
                  id: "PHY12-CH08-T07",
                  topicNumber: 7,
                  topic: "Overtones",
                  brief:
                    "Overtones are resonant frequencies above the fundamental frequency. For an ideal string fixed at both ends, the first overtone is the second harmonic, and higher overtones correspond to progressively higher harmonics.",
                },
                {
                  id: "PHY12-CH08-T08",
                  topicNumber: 8,
                  topic: "Vibrations in open pipes",
                  brief:
                    "An open pipe has both ends open to the atmosphere and supports standing sound waves with displacement antinodes near both ends. In the ideal case, its resonant frequencies are integer multiples of the fundamental frequency.",
                },
                {
                  id: "PHY12-CH08-T09",
                  topicNumber: 9,
                  topic: "Vibrations in closed pipes",
                  brief:
                    "A closed pipe has one end closed and the other open. In the ideal model, the closed end is a displacement node and the open end is a displacement antinode, allowing only odd harmonics.",
                },
                {
                  id: "PHY12-CH08-T10",
                  topicNumber: 10,
                  topic: "Fundamental frequency of air columns",
                  brief:
                    "The fundamental frequency of an air column is its lowest resonant frequency. For ideal pipes, it depends on the length of the air column and the speed of sound, with different relationships for open and closed pipes.",
                },
                {
                  id: "PHY12-CH08-T11",
                  topicNumber: 11,
                  topic: "Harmonics and overtones in pipes",
                  brief:
                    "The harmonic structure of a pipe depends on its boundary conditions. An ideal open pipe supports all integer harmonics, whereas an ideal pipe closed at one end supports only odd harmonics; these resonances determine the musical tones produced.",
                },
                {
                  id: "PHY12-CH08-T12",
                  topicNumber: 12,
                  topic: "End correction",
                  brief:
                    "End correction accounts for the fact that the effective length of a vibrating air column extends slightly beyond the physical opening of a pipe. It is important when calculating the resonant frequencies of pipes, particularly those open at one or both ends.",
                },
                {
                  id: "PHY12-CH08-T13",
                  topicNumber: 13,
                  topic: "Resonance in air columns",
                  brief:
                    "Resonance in an air column occurs when an applied sound frequency matches one of the column's natural frequencies. At resonance, the air vibrates with a comparatively large amplitude, strengthening the sound.",
                },
                {
                  id: "PHY12-CH08-T14",
                  topicNumber: 14,
                  topic: "Applications in musical instruments",
                  brief:
                    "The principles of vibrating strings and air columns explain sound production in instruments such as guitars, violins, flutes, clarinets and organ pipes. Adjusting string tension, vibrating length or air-column length changes the pitch.",
                },
              ],
            },
            {
              id: "PHY12-CH09",
              chapterNumber: 9,
              chapterName: "Acoustic Phenomena",
              topics: [
                {
                  id: "PHY12-CH09-T01",
                  topicNumber: 1,
                  topic: "Characteristics of sound",
                  brief:
                    "Sound is commonly described by its frequency, amplitude, intensity, wavelength and speed. These physical properties help determine how sound propagates and how it is perceived by a listener.",
                },
                {
                  id: "PHY12-CH09-T02",
                  topicNumber: 2,
                  topic: "Pitch, loudness and quality",
                  brief:
                    "Pitch is mainly associated with sound frequency, while loudness is the perceived strength of a sound and depends on intensity and hearing sensitivity. Quality, or timbre, helps distinguish sounds with the same pitch and loudness by their waveform and spectral composition.",
                },
                {
                  id: "PHY12-CH09-T03",
                  topicNumber: 3,
                  topic: "Echo",
                  brief:
                    "An echo is a reflected sound heard separately from the original sound when the reflected wave arrives after a sufficient delay. Its occurrence depends on the distance to the reflecting surface and the surrounding acoustic conditions.",
                },
                {
                  id: "PHY12-CH09-T04",
                  topicNumber: 4,
                  topic: "Reverberation",
                  brief:
                    "Reverberation is the persistence of sound in an enclosed space after the original source stops, caused by multiple reflections from surfaces. Excessive reverberation can make speech unclear, while an appropriate amount can enhance music.",
                },
                {
                  id: "PHY12-CH09-T05",
                  topicNumber: 5,
                  topic: "Reverberation time",
                  brief:
                    "Reverberation time is the time required for the sound level in a room to decrease by 60 decibels after the source stops. It depends on the room's volume, the sound-absorbing properties of its surfaces and the frequency of the sound.",
                },
                {
                  id: "PHY12-CH09-T06",
                  topicNumber: 6,
                  topic: "Factors affecting acoustics",
                  brief:
                    "Room acoustics depend on factors such as room size and shape, surface materials, sound absorption, reflection, diffusion and background noise. These factors influence speech intelligibility, musical quality and the distribution of sound within a space.",
                },
                {
                  id: "PHY12-CH09-T07",
                  topicNumber: 7,
                  topic: "Acoustic design of halls",
                  brief:
                    "Acoustic design aims to provide clear and evenly distributed sound in halls, classrooms, theatres and auditoriums. It uses suitable room geometry, sound-absorbing materials and reflecting surfaces to control echoes, reverberation and unwanted noise.",
                },
                {
                  id: "PHY12-CH09-T08",
                  topicNumber: 8,
                  topic: "Doppler effect",
                  brief:
                    "The Doppler effect is the apparent change in the observed frequency of a wave caused by relative motion between the source and the observer. An approaching source generally produces a higher observed frequency, while a receding source produces a lower one.",
                },
                {
                  id: "PHY12-CH09-T09",
                  topicNumber: 9,
                  topic: "Apparent frequency due to relative motion",
                  brief:
                    "The apparent frequency of sound depends on the motion of the source, the observer or both relative to the medium. The observed frequency increases when their motion brings successive wavefronts closer together and decreases when it spreads them farther apart.",
                },
                {
                  id: "PHY12-CH09-T10",
                  topicNumber: 10,
                  topic: "Applications of the Doppler effect",
                  brief:
                    "The Doppler effect is used in radar speed measurement, medical Doppler ultrasound, weather monitoring and astronomical observations. It helps estimate relative motion and, in suitable situations, the speed of moving objects or fluids.",
                },
                {
                  id: "PHY12-CH09-T11",
                  topicNumber: 11,
                  topic: "Ultrasound",
                  brief:
                    "Ultrasound consists of sound waves with frequencies above the upper limit of typical human hearing, approximately 20 kilohertz. It can travel through materials and reflect at boundaries, making it useful for imaging and measurement.",
                },
                {
                  id: "PHY12-CH09-T12",
                  topicNumber: 12,
                  topic: "Applications of ultrasound",
                  brief:
                    "Ultrasound is used in medical imaging, prenatal examinations, industrial flaw detection, distance measurement and ultrasonic cleaning. Its applications rely on the transmission, reflection and absorption of high-frequency sound waves.",
                },
              ],
            },
            {
              id: "PHY12-CH10",
              chapterNumber: 10,
              chapterName: "Nature and Propagation of Light",
              topics: [
                {
                  id: "PHY12-CH10-T01",
                  topicNumber: 1,
                  topic: "Wave nature of light",
                  brief:
                    "The wave nature of light is demonstrated by phenomena such as interference, diffraction and polarisation. These effects show that light behaves as a wave, although its complete description also requires quantum concepts.",
                },
                {
                  id: "PHY12-CH10-T02",
                  topicNumber: 2,
                  topic: "Electromagnetic nature of light",
                  brief:
                    "Light is an electromagnetic wave consisting of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation. It can travel through a vacuum without a material medium.",
                },
                {
                  id: "PHY12-CH10-T03",
                  topicNumber: 3,
                  topic: "Huygens' principle",
                  brief:
                    "Huygens' principle states that every point on a wavefront acts as a source of secondary wavelets. The new wavefront is formed by the common envelope of these wavelets, helping explain reflection and refraction.",
                },
                {
                  id: "PHY12-CH10-T04",
                  topicNumber: 4,
                  topic: "Wavefronts",
                  brief:
                    "A wavefront is a surface joining points of a wave that are in the same phase. Depending on the source and medium, wavefronts may be plane, spherical or cylindrical.",
                },
                {
                  id: "PHY12-CH10-T05",
                  topicNumber: 5,
                  topic: "Propagation of wavefronts",
                  brief:
                    "Wavefront propagation describes how a wavefront advances through space as the disturbance travels. Huygens' principle models this advancement using secondary wavelets, while the medium's properties determine the propagation speed.",
                },
                {
                  id: "PHY12-CH10-T06",
                  topicNumber: 6,
                  topic: "Reflection of light using wavefronts",
                  brief:
                    "Huygens' principle explains reflection by showing how secondary wavelets form a reflected wavefront at a boundary. The construction leads to the law of reflection: the angle of incidence equals the angle of reflection.",
                },
                {
                  id: "PHY12-CH10-T07",
                  topicNumber: 7,
                  topic: "Refraction of light using wavefronts",
                  brief:
                    "Refraction occurs when light changes direction and speed as it passes between media with different refractive indices. A wavefront construction based on Huygens' principle explains Snell's law and the bending of light.",
                },
                {
                  id: "PHY12-CH10-T08",
                  topicNumber: 8,
                  topic: "Interference of light",
                  brief:
                    "Interference of light occurs when coherent light waves overlap and combine. Depending on their phase difference, they produce regions of enhanced intensity and regions of reduced intensity.",
                },
                {
                  id: "PHY12-CH10-T09",
                  topicNumber: 9,
                  topic: "Diffraction of light",
                  brief:
                    "Diffraction is the spreading and redistribution of light when it passes through an aperture or around an obstacle. It is most noticeable when the size of the opening or obstacle is comparable to the wavelength.",
                },
                {
                  id: "PHY12-CH10-T10",
                  topicNumber: 10,
                  topic: "Polarisation of light",
                  brief:
                    "Polarisation describes the orientation of the oscillations of the electric field of a light wave. It demonstrates the transverse nature of electromagnetic waves and can be produced using polarising materials or reflection under suitable conditions.",
                },
                {
                  id: "PHY12-CH10-T11",
                  topicNumber: 11,
                  topic: "Speed of light in different media",
                  brief:
                    "The speed of light depends on the optical properties of the medium. In a medium with refractive index n, the phase speed is approximately c/n, where c is the speed of light in a vacuum.",
                },
                {
                  id: "PHY12-CH10-T12",
                  topicNumber: 12,
                  topic: "Applications of wave optics",
                  brief:
                    "Wave optics explains and supports technologies such as interferometers, diffraction gratings, polarising filters, optical instruments and precision measurement systems. It is essential for understanding the wave-based behavior of light.",
                },
              ],
            },
            {
              id: "PHY12-CH11",
              chapterNumber: 11,
              chapterName: "Interference of Light",
              topics: [
                {
                  id: "PHY12-CH11-T01",
                  topicNumber: 1,
                  topic: "Principle of superposition",
                  brief:
                    "The principle of superposition states that when light waves overlap, the resultant electric field is the sum of their individual fields. The resulting intensity depends on the waves' amplitudes and relative phase.",
                },
                {
                  id: "PHY12-CH11-T02",
                  topicNumber: 2,
                  topic: "Coherent sources",
                  brief:
                    "Coherent sources produce waves of the same frequency with a constant phase difference. Coherence is necessary for a stable interference pattern to form over time.",
                },
                {
                  id: "PHY12-CH11-T03",
                  topicNumber: 3,
                  topic: "Constructive interference",
                  brief:
                    "Constructive interference occurs when waves arrive in phase and reinforce one another, producing maximum intensity. For two coherent waves, this occurs when their path difference is an integer multiple of the wavelength.",
                },
                {
                  id: "PHY12-CH11-T04",
                  topicNumber: 4,
                  topic: "Destructive interference",
                  brief:
                    "Destructive interference occurs when waves arrive out of phase and reduce the resultant amplitude. For two waves of equal amplitude, complete cancellation occurs when their phase difference is an odd multiple of π.",
                },
                {
                  id: "PHY12-CH11-T05",
                  topicNumber: 5,
                  topic: "Path difference",
                  brief:
                    "Path difference is the difference between the distances travelled by two waves to reach the same point. It determines their phase relationship and helps identify the positions of constructive and destructive interference.",
                },
                {
                  id: "PHY12-CH11-T06",
                  topicNumber: 6,
                  topic: "Phase difference",
                  brief:
                    "Phase difference measures the difference in phase between two oscillations or waves. It determines whether their contributions reinforce or cancel one another when they overlap.",
                },
                {
                  id: "PHY12-CH11-T07",
                  topicNumber: 7,
                  topic: "Young's double-slit experiment",
                  brief:
                    "Young's double-slit experiment demonstrates the interference of light using two narrow slits illuminated by a coherent source. The overlapping waves produce alternating bright and dark fringes on a screen.",
                },
                {
                  id: "PHY12-CH11-T08",
                  topicNumber: 8,
                  topic: "Fringe formation",
                  brief:
                    "Fringes form when light waves from two coherent sources interfere at different points on a screen. Bright fringes correspond to constructive interference, while dark fringes correspond to destructive interference under suitable conditions.",
                },
                {
                  id: "PHY12-CH11-T09",
                  topicNumber: 9,
                  topic: "Fringe width",
                  brief:
                    "Fringe width is the distance between two successive bright fringes or two successive dark fringes in an interference pattern. In Young's double-slit experiment under the usual small-angle approximation, it depends on wavelength, screen distance and slit separation.",
                },
                {
                  id: "PHY12-CH11-T10",
                  topicNumber: 10,
                  topic: "Factors affecting fringe width",
                  brief:
                    "Fringe width increases with the wavelength of light and the distance between the slits and the screen. It decreases as the separation between the slits increases, assuming the standard double-slit arrangement and small-angle conditions.",
                },
                {
                  id: "PHY12-CH11-T11",
                  topicNumber: 11,
                  topic: "Interference in thin films",
                  brief:
                    "Thin-film interference occurs when light reflected from different surfaces of a thin layer combines. The resulting colours or intensity variations depend on film thickness, wavelength, refractive index and phase changes on reflection.",
                },
                {
                  id: "PHY12-CH11-T12",
                  topicNumber: 12,
                  topic: "Applications of interference",
                  brief:
                    "Interference is used in precision measurements, optical testing, anti-reflection coatings, interferometers and the analysis of thin films. It can reveal extremely small changes in distance, refractive index or surface shape.",
                },
              ],
            },
            {
              id: "PHY12-CH12",
              chapterNumber: 12,
              chapterName: "Diffraction",
              topics: [
                {
                  id: "PHY12-CH12-T01",
                  topicNumber: 1,
                  topic: "Diffraction of light",
                  brief:
                    "Diffraction is the bending and spreading of light around obstacles or through narrow openings. It produces characteristic intensity patterns when light from different parts of a wavefront overlaps.",
                },
                {
                  id: "PHY12-CH12-T02",
                  topicNumber: 2,
                  topic: "Fresnel diffraction",
                  brief:
                    "Fresnel diffraction is near-field diffraction, where the source or observation screen is at a finite distance from the diffracting aperture or obstacle. Wavefront curvature must be considered when describing the resulting pattern.",
                },
                {
                  id: "PHY12-CH12-T03",
                  topicNumber: 3,
                  topic: "Fraunhofer diffraction",
                  brief:
                    "Fraunhofer diffraction is far-field diffraction in which the incident and observed wavefronts can be treated as approximately plane. It is often studied using lenses to produce and observe the diffraction pattern at finite distances.",
                },
                {
                  id: "PHY12-CH12-T04",
                  topicNumber: 4,
                  topic: "Diffraction at a single slit",
                  brief:
                    "Single-slit diffraction occurs when light passes through a narrow slit and spreads to form a pattern of bright and dark regions. The pattern depends on the slit width and the wavelength of the light.",
                },
                {
                  id: "PHY12-CH12-T05",
                  topicNumber: 5,
                  topic: "Diffraction pattern",
                  brief:
                    "A diffraction pattern is the distribution of light intensity produced by diffraction. It may contain a broad central maximum and alternating weaker maxima and minima, depending on the aperture geometry.",
                },
                {
                  id: "PHY12-CH12-T06",
                  topicNumber: 6,
                  topic: "Central maximum",
                  brief:
                    "The central maximum is the brightest main region in a typical single-slit Fraunhofer diffraction pattern. It lies around the forward direction and is wider than the adjacent secondary maxima.",
                },
                {
                  id: "PHY12-CH12-T07",
                  topicNumber: 7,
                  topic: "Minima and maxima",
                  brief:
                    "Minima are positions of reduced or zero intensity, while maxima are positions of relatively high intensity in a diffraction pattern. Their locations depend on wavelength, aperture dimensions and the geometry of the arrangement.",
                },
                {
                  id: "PHY12-CH12-T08",
                  topicNumber: 8,
                  topic: "Width of the central maximum",
                  brief:
                    "The width of the central maximum in single-slit Fraunhofer diffraction is determined by the slit width and wavelength. For a slit of width a, the first minima satisfy sin θ = ±λ/a, giving an angular width of approximately 2λ/a for small angles.",
                },
                {
                  id: "PHY12-CH12-T09",
                  topicNumber: 9,
                  topic: "Diffraction grating",
                  brief:
                    "A diffraction grating contains many regularly spaced slits or grooves that diffract light and produce sharp interference maxima. It separates light into different wavelengths and is widely used in spectroscopy.",
                },
                {
                  id: "PHY12-CH12-T10",
                  topicNumber: 10,
                  topic: "Grating equation",
                  brief:
                    "The grating equation relates the wavelength of light, the spacing between adjacent grating lines and the angle of a diffraction maximum. For normal incidence, principal maxima satisfy d sin θ = nλ, where d is grating spacing and n is the diffraction order.",
                },
                {
                  id: "PHY12-CH12-T11",
                  topicNumber: 11,
                  topic: "Resolving power",
                  brief:
                    "Resolving power describes the ability of an optical instrument to distinguish two closely spaced wavelengths or objects. For a diffraction grating, the resolving power depends on the diffraction order and the total number of illuminated grating lines.",
                },
                {
                  id: "PHY12-CH12-T12",
                  topicNumber: 12,
                  topic: "Applications of diffraction",
                  brief:
                    "Diffraction is used in spectroscopy, wavelength measurement, crystal structure analysis and the design of optical instruments. It also sets fundamental limits on the resolution of microscopes, telescopes and other imaging systems.",
                },
              ],
            },
            {
              id: "PHY12-CH13",
              chapterNumber: 13,
              chapterName: "Polarisation",
              topics: [
                {
                  id: "PHY12-CH13-T01",
                  topicNumber: 1,
                  topic: "Polarisation of light",
                  brief:
                    "Polarisation is the process of restricting the orientation of the electric-field oscillations of light. It is a property of transverse waves and provides evidence for the transverse nature of electromagnetic radiation.",
                },
                {
                  id: "PHY12-CH13-T02",
                  topicNumber: 2,
                  topic: "Unpolarised and plane-polarised light",
                  brief:
                    "Unpolarised light has electric-field oscillations in many transverse directions, while plane-polarised light has its electric field oscillating along one fixed direction perpendicular to propagation. Polarising materials can convert unpolarised light into polarised light.",
                },
                {
                  id: "PHY12-CH13-T03",
                  topicNumber: 3,
                  topic: "Polariser and analyser",
                  brief:
                    "A polariser produces light with a selected polarisation direction, while an analyser is used to examine the polarisation of light. Rotating the analyser changes the transmitted intensity according to the angle between their transmission axes.",
                },
                {
                  id: "PHY12-CH13-T04",
                  topicNumber: 4,
                  topic: "Polarisation by reflection",
                  brief:
                    "When unpolarised light reflects from a non-metallic surface, the reflected light can become partially or completely polarised depending on the angle of incidence. At the Brewster angle, the reflected light is completely plane-polarised for an ideal dielectric interface.",
                },
                {
                  id: "PHY12-CH13-T05",
                  topicNumber: 5,
                  topic: "Brewster's law",
                  brief:
                    "Brewster's law states that at the polarising angle, the reflected and refracted rays are perpendicular. For light incident from a medium of refractive index n₁ into one of refractive index n₂, tan θB = n₂/n₁.",
                },
                {
                  id: "PHY12-CH13-T06",
                  topicNumber: 6,
                  topic: "Malus's law",
                  brief:
                    "Malus's law describes the intensity of plane-polarised light transmitted through an ideal analyser. The transmitted intensity is proportional to the square of the cosine of the angle between the incident polarisation direction and the analyser's transmission axis.",
                },
                {
                  id: "PHY12-CH13-T07",
                  topicNumber: 7,
                  topic: "Double refraction",
                  brief:
                    "Double refraction occurs in certain anisotropic crystals when an incident light ray splits into two refracted rays with different polarisation states and propagation speeds. The phenomenon arises because the refractive index depends on the direction and polarisation of light in the crystal.",
                },
                {
                  id: "PHY12-CH13-T08",
                  topicNumber: 8,
                  topic: "Polaroids",
                  brief:
                    "Polaroids are polarising sheets that selectively transmit light with a particular electric-field orientation while absorbing or reducing other orientations. They are used in sunglasses, displays, photography and experiments involving polarisation.",
                },
                {
                  id: "PHY12-CH13-T09",
                  topicNumber: 9,
                  topic: "Applications of polarisation",
                  brief:
                    "Polarisation is used in glare-reducing sunglasses, LCD screens, photography filters, stress analysis and optical measurement. It also helps investigate material properties and distinguish different optical signals.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY12-B04",
          branchNumber: 4,
          branchName: "Electricity and Magnetism",
          chapters: [
            {
              id: "PHY12-CH14",
              chapterNumber: 14,
              chapterName: "Electrical Circuits",
              topics: [
                {
                  id: "PHY12-CH14-T01",
                  topicNumber: 1,
                  topic: "Electric current",
                  brief:
                    "Electric current is the rate of flow of electric charge through a conductor or circuit. It is measured in amperes and depends on the amount of charge passing through a cross-section per unit time.",
                },
                {
                  id: "PHY12-CH14-T02",
                  topicNumber: 2,
                  topic: "Ohm's law",
                  brief:
                    "Ohm's law states that, at constant physical conditions such as temperature, the current through an ohmic conductor is directly proportional to the potential difference across it. The proportionality constant is its electrical resistance.",
                },
                {
                  id: "PHY12-CH14-T03",
                  topicNumber: 3,
                  topic: "Resistance and resistivity",
                  brief:
                    "Resistance measures how strongly a component opposes electric current, while resistivity is an intrinsic property of a material. The resistance of a uniform conductor depends on its length, cross-sectional area and the resistivity of its material.",
                },
                {
                  id: "PHY12-CH14-T04",
                  topicNumber: 4,
                  topic: "Temperature dependence of resistance",
                  brief:
                    "The resistance of a material generally changes with temperature. Metallic conductors usually become more resistive as temperature rises, while some semiconductors exhibit decreasing resistance because the number of charge carriers increases.",
                },
                {
                  id: "PHY12-CH14-T05",
                  topicNumber: 5,
                  topic: "Series and parallel circuits",
                  brief:
                    "In a series circuit, components carry the same current and their resistances add. In a parallel circuit, components share the same potential difference, and the reciprocal of the equivalent resistance equals the sum of the reciprocals of the individual resistances.",
                },
                {
                  id: "PHY12-CH14-T06",
                  topicNumber: 6,
                  topic: "Kirchhoff's laws",
                  brief:
                    "Kirchhoff's current law states that the total current entering a junction equals the total current leaving it. Kirchhoff's voltage law states that the algebraic sum of potential differences around a closed circuit loop is zero, reflecting conservation of charge and energy.",
                },
                {
                  id: "PHY12-CH14-T07",
                  topicNumber: 7,
                  topic: "Cells in series and parallel",
                  brief:
                    "Cells connected in series combine their electromotive forces, with the total depending on their orientations and internal resistances. Cells connected in parallel can supply greater current capacity, and identical cells in parallel have the same equivalent emf as a single cell.",
                },
                {
                  id: "PHY12-CH14-T08",
                  topicNumber: 8,
                  topic: "Electromotive force",
                  brief:
                    "Electromotive force (emf) is the energy supplied by a source per unit charge passing through it. It is measured in volts and represents the source's energy supplied per coulomb, rather than a mechanical force.",
                },
                {
                  id: "PHY12-CH14-T09",
                  topicNumber: 9,
                  topic: "Internal resistance",
                  brief:
                    "Internal resistance is the resistance within a cell or electrical source that causes a voltage drop when current flows. Consequently, the terminal potential difference of a discharging cell is generally less than its emf.",
                },
                {
                  id: "PHY12-CH14-T10",
                  topicNumber: 10,
                  topic: "Potentiometer",
                  brief:
                    "A potentiometer measures or compares potential differences using the potential drop along a uniform wire carrying a steady current. At the balance point, it draws no current from the source being measured, allowing accurate emf comparisons.",
                },
                {
                  id: "PHY12-CH14-T11",
                  topicNumber: 11,
                  topic: "Measurement of potential difference",
                  brief:
                    "Potential difference is measured using a voltmeter connected in parallel across the component. An ideal voltmeter has infinite resistance so that it draws no current and minimally disturbs the circuit.",
                },
                {
                  id: "PHY12-CH14-T12",
                  topicNumber: 12,
                  topic: "Measurement of electromotive force",
                  brief:
                    "The emf of a source can be measured accurately using a potentiometer by balancing it against a known potential gradient. At the balance point, no current is drawn from the source being measured.",
                },
                {
                  id: "PHY12-CH14-T13",
                  topicNumber: 13,
                  topic: "Wheatstone bridge",
                  brief:
                    "A Wheatstone bridge is a circuit used to determine an unknown resistance by balancing two branches of a bridge network. At balance, the galvanometer current is zero and the resistance ratios of the two branches are equal.",
                },
                {
                  id: "PHY12-CH14-T14",
                  topicNumber: 14,
                  topic: "Meter bridge",
                  brief:
                    "A meter bridge is a practical form of the Wheatstone bridge that uses a uniform wire approximately one metre long to determine an unknown resistance. The balance point and the wire's resistance ratios are used to calculate the unknown value.",
                },
                {
                  id: "PHY12-CH14-T15",
                  topicNumber: 15,
                  topic: "Electrical power and energy",
                  brief:
                    "Electrical power is the rate at which electrical energy is transferred or converted in a circuit. Electrical energy consumed over time depends on power and operating duration, and is commonly measured in joules or kilowatt-hours.",
                },
              ],
            },
            {
              id: "PHY12-CH15",
              chapterNumber: 15,
              chapterName: "Thermoelectric Effect",
              topics: [
                {
                  id: "PHY12-CH15-T01",
                  topicNumber: 1,
                  topic: "Thermoelectricity",
                  brief:
                    "Thermoelectricity concerns the relationship between temperature differences and electrical effects in materials. Thermoelectric phenomena allow temperature differences to generate voltage or electrical current to produce heating and cooling.",
                },
                {
                  id: "PHY12-CH15-T02",
                  topicNumber: 2,
                  topic: "Seebeck effect",
                  brief:
                    "The Seebeck effect is the production of an emf in a circuit made from different conductors or semiconductors when their junctions are maintained at different temperatures. It is the operating principle of thermocouples.",
                },
                {
                  id: "PHY12-CH15-T03",
                  topicNumber: 3,
                  topic: "Peltier effect",
                  brief:
                    "The Peltier effect occurs when electric current passing through a junction of two different materials causes heat to be absorbed or released. Reversing the current reverses the direction of heating and cooling under comparable conditions.",
                },
                {
                  id: "PHY12-CH15-T04",
                  topicNumber: 4,
                  topic: "Thomson effect",
                  brief:
                    "The Thomson effect is the reversible absorption or release of heat when an electric current flows through a single homogeneous conductor along which a temperature gradient exists.",
                },
                {
                  id: "PHY12-CH15-T05",
                  topicNumber: 5,
                  topic: "Thermoelectric emf",
                  brief:
                    "Thermoelectric emf is the voltage produced in a thermoelectric circuit due to a temperature difference between its junctions. Its magnitude depends on the materials used and the temperatures of the junctions.",
                },
                {
                  id: "PHY12-CH15-T06",
                  topicNumber: 6,
                  topic: "Thermocouple",
                  brief:
                    "A thermocouple consists of two dissimilar conductors joined to form junctions. When the junctions are at different temperatures, a thermoelectric emf develops that can be calibrated to measure temperature.",
                },
                {
                  id: "PHY12-CH15-T07",
                  topicNumber: 7,
                  topic: "Neutral temperature",
                  brief:
                    "Neutral temperature is the hot-junction temperature at which the thermoelectric emf of a thermocouple reaches its maximum for a fixed cold-junction temperature. Its value depends on the thermoelectric properties of the materials and the cold-junction temperature.",
                },
                {
                  id: "PHY12-CH15-T08",
                  topicNumber: 8,
                  topic: "Inversion temperature",
                  brief:
                    "Inversion temperature is the hot-junction temperature at which the thermoelectric emf becomes zero again and reverses direction as the temperature rises, for a fixed cold-junction temperature. In the usual introductory model, it lies above the neutral temperature.",
                },
                {
                  id: "PHY12-CH15-T09",
                  topicNumber: 9,
                  topic: "Thermoelectric series",
                  brief:
                    "A thermoelectric series arranges materials according to their relative thermoelectric behavior when paired with another material. It helps predict the direction of thermoelectric emf and compare the Seebeck response of different material combinations.",
                },
                {
                  id: "PHY12-CH15-T10",
                  topicNumber: 10,
                  topic: "Applications of thermoelectric effects",
                  brief:
                    "Thermoelectric effects are used in temperature sensors, thermoelectric generators, solid-state cooling devices and scientific instruments. They enable direct conversion between thermal energy differences and electrical energy.",
                },
              ],
            },
            {
              id: "PHY12-CH16",
              chapterNumber: 16,
              chapterName: "Magnetic Fields",
              topics: [
                {
                  id: "PHY12-CH16-T01",
                  topicNumber: 1,
                  topic: "Magnetic field",
                  brief:
                    "A magnetic field is a region in which moving electric charges, electric currents or magnetic materials experience magnetic forces. It is represented by the magnetic field vector and measured in teslas.",
                },
                {
                  id: "PHY12-CH16-T02",
                  topicNumber: 2,
                  topic: "Magnetic field lines",
                  brief:
                    "Magnetic field lines are visual representations of a magnetic field, with the tangent at each point indicating the field's direction. Their spacing qualitatively represents field strength, and magnetic field lines form continuous loops.",
                },
                {
                  id: "PHY12-CH16-T03",
                  topicNumber: 3,
                  topic: "Magnetic flux",
                  brief:
                    "Magnetic flux measures the magnetic field passing through a surface. For a uniform field across a flat surface, it depends on the magnetic field strength, surface area and angle between the field and the surface normal.",
                },
                {
                  id: "PHY12-CH16-T04",
                  topicNumber: 4,
                  topic: "Magnetic force on a moving charge",
                  brief:
                    "A moving electric charge experiences a magnetic force when its velocity has a component perpendicular to a magnetic field. The force is perpendicular to both the velocity and the field, and its magnitude depends on the charge, speed and angle of motion.",
                },
                {
                  id: "PHY12-CH16-T05",
                  topicNumber: 5,
                  topic: "Lorentz force",
                  brief:
                    "The Lorentz force is the total electromagnetic force on a charged particle due to electric and magnetic fields. It combines the electric force, which depends on the electric field, and the magnetic force, which depends on the particle's velocity and magnetic field.",
                },
                {
                  id: "PHY12-CH16-T06",
                  topicNumber: 6,
                  topic: "Motion of charged particles in magnetic fields",
                  brief:
                    "A charged particle moving perpendicular to a uniform magnetic field follows a circular path because the magnetic force acts as a centripetal force. At an angle to the field, the particle can follow a helical path; its speed remains constant if only the magnetic force acts.",
                },
                {
                  id: "PHY12-CH16-T07",
                  topicNumber: 7,
                  topic: "Force on a current-carrying conductor",
                  brief:
                    "A current-carrying conductor placed in a magnetic field experiences a force due to the magnetic forces on its moving charges. The force depends on the current, the length of conductor within the field, the magnetic field strength and their relative orientation.",
                },
                {
                  id: "PHY12-CH16-T08",
                  topicNumber: 8,
                  topic: "Force between parallel current-carrying conductors",
                  brief:
                    "Two parallel current-carrying conductors exert magnetic forces on each other. Currents flowing in the same direction attract, while currents flowing in opposite directions repel.",
                },
                {
                  id: "PHY12-CH16-T09",
                  topicNumber: 9,
                  topic: "Magnetic field due to a straight conductor",
                  brief:
                    "A long straight conductor carrying current produces circular magnetic field lines around it. The field strength decreases with distance from the conductor and increases with current.",
                },
                {
                  id: "PHY12-CH16-T10",
                  topicNumber: 10,
                  topic: "Magnetic field due to a circular coil",
                  brief:
                    "A current-carrying circular coil produces a magnetic field whose direction follows the right-hand rule. At the centre of a circular coil, the field strength depends on the current, the coil's radius and the number of turns.",
                },
                {
                  id: "PHY12-CH16-T11",
                  topicNumber: 11,
                  topic: "Magnetic field due to a solenoid",
                  brief:
                    "A solenoid is a long coil of wire that produces a magnetic field when current flows through it. For an ideal long solenoid, the field inside is approximately uniform, while the field outside is relatively weak.",
                },
                {
                  id: "PHY12-CH16-T12",
                  topicNumber: 12,
                  topic: "Biot-Savart law",
                  brief:
                    "The Biot-Savart law describes the magnetic field contribution produced by a small element of current-carrying wire. The total magnetic field is found by adding the contributions from all current elements using vector integration.",
                },
                {
                  id: "PHY12-CH16-T13",
                  topicNumber: 13,
                  topic: "Ampere's circuital law",
                  brief:
                    "Ampere's circuital law relates the line integral of the magnetic field around a closed path to the net current enclosed by that path. It is particularly useful for calculating magnetic fields in systems with high symmetry.",
                },
                {
                  id: "PHY12-CH16-T14",
                  topicNumber: 14,
                  topic: "Torque on a current loop",
                  brief:
                    "A current-carrying loop in a magnetic field can experience a torque that tends to align its magnetic dipole moment with the field. The torque depends on the current, loop area, number of turns, field strength and orientation.",
                },
                {
                  id: "PHY12-CH16-T15",
                  topicNumber: 15,
                  topic: "Moving-coil galvanometer",
                  brief:
                    "A moving-coil galvanometer detects and measures small electric currents using the torque on a current-carrying coil in a magnetic field. Its deflection is proportional to the current when the restoring torque is proportional to angular displacement.",
                },
                {
                  id: "PHY12-CH16-T16",
                  topicNumber: 16,
                  topic: "Conversion of galvanometer into an ammeter",
                  brief:
                    "A galvanometer is converted into an ammeter by connecting a low resistance called a shunt in parallel with it. Most of the current passes through the shunt, allowing the instrument to measure larger currents.",
                },
                {
                  id: "PHY12-CH16-T17",
                  topicNumber: 17,
                  topic: "Conversion of galvanometer into a voltmeter",
                  brief:
                    "A galvanometer is converted into a voltmeter by connecting a high resistance in series with it. This limits the current through the galvanometer and allows potential differences to be measured with minimal loading of the circuit.",
                },
              ],
            },
            {
              id: "PHY12-CH17",
              chapterNumber: 17,
              chapterName: "Magnetic Properties of Materials",
              topics: [
                {
                  id: "PHY12-CH17-T01",
                  topicNumber: 1,
                  topic: "Magnetic dipole",
                  brief:
                    "A magnetic dipole is a system with a north and south magnetic pole, such as a small bar magnet or a current loop. Its behavior in an external magnetic field can be described using its magnetic dipole moment.",
                },
                {
                  id: "PHY12-CH17-T02",
                  topicNumber: 2,
                  topic: "Magnetic dipole moment",
                  brief:
                    "Magnetic dipole moment measures the strength and orientation of a magnetic dipole. For a planar current loop, its magnitude equals the current multiplied by the loop area, with direction given by the right-hand rule.",
                },
                {
                  id: "PHY12-CH17-T03",
                  topicNumber: 3,
                  topic: "Magnetisation",
                  brief:
                    "Magnetisation describes the net magnetic dipole moment per unit volume of a material. It indicates how strongly the material becomes magnetically aligned under an applied field.",
                },
                {
                  id: "PHY12-CH17-T04",
                  topicNumber: 4,
                  topic: "Magnetic intensity",
                  brief:
                    "Magnetic field intensity, commonly denoted by H, describes the magnetising field produced by free currents and external sources. It is distinct from magnetic flux density B, which also reflects the response of the material.",
                },
                {
                  id: "PHY12-CH17-T05",
                  topicNumber: 5,
                  topic: "Magnetic susceptibility",
                  brief:
                    "Magnetic susceptibility measures how readily a material becomes magnetised in response to an applied magnetic field. For a linear, isotropic material, it relates magnetisation to magnetic field intensity.",
                },
                {
                  id: "PHY12-CH17-T06",
                  topicNumber: 6,
                  topic: "Magnetic permeability",
                  brief:
                    "Magnetic permeability describes how a material responds to a magnetic field and relates magnetic flux density to magnetic field intensity under appropriate conditions. It influences how magnetic fields are established within a material.",
                },
                {
                  id: "PHY12-CH17-T07",
                  topicNumber: 7,
                  topic: "Diamagnetic materials",
                  brief:
                    "Diamagnetic materials develop a weak magnetisation opposite to an applied magnetic field and are generally weakly repelled by it. This response is typically present in all materials but can be masked by stronger magnetic effects.",
                },
                {
                  id: "PHY12-CH17-T08",
                  topicNumber: 8,
                  topic: "Paramagnetic materials",
                  brief:
                    "Paramagnetic materials have magnetic moments that tend to align with an applied magnetic field, producing weak attraction. Their magnetisation usually decreases as temperature rises because thermal motion disrupts alignment.",
                },
                {
                  id: "PHY12-CH17-T09",
                  topicNumber: 9,
                  topic: "Ferromagnetic materials",
                  brief:
                    "Ferromagnetic materials can develop strong magnetisation because many atomic magnetic moments align within regions of the material. They may retain magnetisation after the external field is removed and can show hysteresis.",
                },
                {
                  id: "PHY12-CH17-T10",
                  topicNumber: 10,
                  topic: "Magnetic domains",
                  brief:
                    "Magnetic domains are regions within ferromagnetic materials where many atomic magnetic moments are aligned in a common direction. Applying a magnetic field can move domain walls and rotate domains, increasing the material's overall magnetisation.",
                },
                {
                  id: "PHY12-CH17-T11",
                  topicNumber: 11,
                  topic: "Hysteresis",
                  brief:
                    "Magnetic hysteresis occurs when a material's magnetisation depends on its previous magnetic history as well as the current applied field. A hysteresis loop illustrates effects such as saturation, remanence and coercivity.",
                },
                {
                  id: "PHY12-CH17-T12",
                  topicNumber: 12,
                  topic: "Retentivity and coercivity",
                  brief:
                    "Retentivity describes a material's ability to retain magnetisation after the magnetising field is removed. Coercivity is the magnitude of the reverse magnetic field required to reduce the residual magnetisation to zero.",
                },
                {
                  id: "PHY12-CH17-T13",
                  topicNumber: 13,
                  topic: "Soft and hard magnetic materials",
                  brief:
                    "Soft magnetic materials are easily magnetised and demagnetised and generally have low coercivity, making them useful in transformer cores. Hard magnetic materials have high coercivity and retain magnetisation, making them suitable for permanent magnets.",
                },
                {
                  id: "PHY12-CH17-T14",
                  topicNumber: 14,
                  topic: "Applications of magnetic materials",
                  brief:
                    "Magnetic materials are used in electric motors, generators, transformers, speakers, sensors, data storage and permanent magnets. Their selection depends on properties such as permeability, coercivity, saturation magnetisation and hysteresis loss.",
                },
              ],
            },
            {
              id: "PHY12-CH18",
              chapterNumber: 18,
              chapterName: "Electromagnetic Induction",
              topics: [
                {
                  id: "PHY12-CH18-T01",
                  topicNumber: 1,
                  topic: "Magnetic flux",
                  brief:
                    "Magnetic flux measures the magnetic field passing through a surface and is central to electromagnetic induction. A change in flux can occur when the magnetic field, the surface area or the orientation of the surface changes.",
                },
                {
                  id: "PHY12-CH18-T02",
                  topicNumber: 2,
                  topic: "Faraday's laws of electromagnetic induction",
                  brief:
                    "Faraday's laws state that an emf is induced when the magnetic flux linked with a circuit changes. The magnitude of the induced emf is proportional to the rate of change of magnetic flux linkage.",
                },
                {
                  id: "PHY12-CH18-T03",
                  topicNumber: 3,
                  topic: "Lenz's law",
                  brief:
                    "Lenz's law states that the induced current flows in a direction that opposes the change in magnetic flux that produced it. This opposition is consistent with conservation of energy.",
                },
                {
                  id: "PHY12-CH18-T04",
                  topicNumber: 4,
                  topic: "Induced electromotive force",
                  brief:
                    "Induced electromotive force is the voltage generated in a conductor or circuit when its magnetic flux linkage changes. It can result from changing magnetic fields, relative motion between a conductor and a field, or both.",
                },
                {
                  id: "PHY12-CH18-T05",
                  topicNumber: 5,
                  topic: "Motional emf",
                  brief:
                    "Motional emf is generated when a conductor moves through a magnetic field and its free charges experience magnetic forces. For a straight conductor moving perpendicular to a uniform magnetic field, the emf depends on the field strength, conductor length and speed.",
                },
                {
                  id: "PHY12-CH18-T06",
                  topicNumber: 6,
                  topic: "Fleming's right-hand rule",
                  brief:
                    "Fleming's right-hand rule helps determine the direction of induced current in a generator. With the thumb, first finger and middle finger held mutually perpendicular, they represent conductor motion, magnetic field and induced current, respectively, using the conventional orientation.",
                },
                {
                  id: "PHY12-CH18-T07",
                  topicNumber: 7,
                  topic: "Eddy currents",
                  brief:
                    "Eddy currents are circulating electric currents induced within a bulk conductor by changing magnetic flux. They can produce heating and energy losses, but are also useful in induction heating, magnetic braking and damping.",
                },
                {
                  id: "PHY12-CH18-T08",
                  topicNumber: 8,
                  topic: "Self-induction",
                  brief:
                    "Self-induction occurs when a changing current in a circuit changes its own magnetic flux and induces an emf in that same circuit. The induced emf opposes the change in current that produces it.",
                },
                {
                  id: "PHY12-CH18-T09",
                  topicNumber: 9,
                  topic: "Self-inductance",
                  brief:
                    "Self-inductance is a property of a circuit that measures the magnetic flux linkage produced per unit current under linear conditions. It determines the magnitude of the induced emf when the current changes.",
                },
                {
                  id: "PHY12-CH18-T10",
                  topicNumber: 10,
                  topic: "Mutual induction",
                  brief:
                    "Mutual induction occurs when a changing current in one coil changes the magnetic flux linked with a nearby coil, inducing an emf in the second coil. It is the basic operating principle of transformers.",
                },
                {
                  id: "PHY12-CH18-T11",
                  topicNumber: 11,
                  topic: "Mutual inductance",
                  brief:
                    "Mutual inductance measures how effectively a change in current in one circuit induces an emf in another circuit. It depends on factors such as coil geometry, separation, orientation and the magnetic properties of the surrounding material.",
                },
                {
                  id: "PHY12-CH18-T12",
                  topicNumber: 12,
                  topic: "Energy stored in an inductor",
                  brief:
                    "An inductor stores energy in its magnetic field when current flows through it. For an ideal inductor with constant inductance, the stored energy depends on the inductance and the square of the current.",
                },
                {
                  id: "PHY12-CH18-T13",
                  topicNumber: 13,
                  topic: "Alternating emf generation",
                  brief:
                    "Alternating emf can be generated by rotating a coil in a magnetic field, causing the magnetic flux through the coil to vary periodically. This principle is used in electrical generators to convert mechanical energy into electrical energy.",
                },
                {
                  id: "PHY12-CH18-T14",
                  topicNumber: 14,
                  topic: "Applications of electromagnetic induction",
                  brief:
                    "Electromagnetic induction is used in generators, transformers, induction cookers, wireless charging systems, microphones and magnetic sensors. These devices rely on induced voltages or currents produced by changing magnetic flux.",
                },
              ],
            },
            {
              id: "PHY12-CH19",
              chapterNumber: 19,
              chapterName: "Alternating Current",
              topics: [
                {
                  id: "PHY12-CH19-T01",
                  topicNumber: 1,
                  topic: "Alternating current and voltage",
                  brief:
                    "Alternating current and voltage vary periodically in magnitude and reverse direction over time. They are commonly used in power systems because their voltage levels can be changed efficiently using transformers.",
                },
                {
                  id: "PHY12-CH19-T02",
                  topicNumber: 2,
                  topic: "Sinusoidal alternating quantities",
                  brief:
                    "Sinusoidal alternating quantities vary according to a sine or cosine function of time. Their behavior can be described using amplitude, frequency, angular frequency and phase.",
                },
                {
                  id: "PHY12-CH19-T03",
                  topicNumber: 3,
                  topic: "Peak and rms values",
                  brief:
                    "The peak value is the maximum magnitude reached by an alternating current or voltage. The root-mean-square value represents the equivalent steady DC value that would produce the same average heating effect in a resistor.",
                },
                {
                  id: "PHY12-CH19-T04",
                  topicNumber: 4,
                  topic: "Mean value of alternating current",
                  brief:
                    "The mean value of an alternating current is its average over a specified time interval. For a symmetrical sinusoidal current, the average over a complete cycle is zero, while the average over a half-cycle is nonzero.",
                },
                {
                  id: "PHY12-CH19-T05",
                  topicNumber: 5,
                  topic: "AC through a resistor",
                  brief:
                    "In a purely resistive AC circuit, current and voltage are in phase. The resistance determines their amplitude relationship, and electrical energy is dissipated as heat.",
                },
                {
                  id: "PHY12-CH19-T06",
                  topicNumber: 6,
                  topic: "AC through an inductor",
                  brief:
                    "In an ideal inductive AC circuit, the current lags the voltage by 90 degrees. The inductor opposes changes in current through its inductive reactance and stores energy temporarily in its magnetic field.",
                },
                {
                  id: "PHY12-CH19-T07",
                  topicNumber: 7,
                  topic: "AC through a capacitor",
                  brief:
                    "In an ideal capacitive AC circuit, the current leads the voltage by 90 degrees. The capacitor's reactance decreases as frequency increases, and energy is stored temporarily in its electric field.",
                },
                {
                  id: "PHY12-CH19-T08",
                  topicNumber: 8,
                  topic: "Inductive and capacitive reactance",
                  brief:
                    "Reactance is the opposition to alternating current caused by inductors or capacitors. Inductive reactance increases with frequency, while capacitive reactance decreases with frequency.",
                },
                {
                  id: "PHY12-CH19-T09",
                  topicNumber: 9,
                  topic: "Impedance",
                  brief:
                    "Impedance is the total opposition to alternating current, combining resistance and reactance. In a series AC circuit, it determines the relationship between voltage amplitude and current amplitude and depends on the circuit's frequency.",
                },
                {
                  id: "PHY12-CH19-T10",
                  topicNumber: 10,
                  topic: "Series LCR circuits",
                  brief:
                    "A series LCR circuit contains an inductor, capacitor and resistor connected in series to an AC source. Its current and phase relationship depend on resistance and the difference between inductive and capacitive reactances.",
                },
                {
                  id: "PHY12-CH19-T11",
                  topicNumber: 11,
                  topic: "Phase difference",
                  brief:
                    "Phase difference describes the relative timing between alternating quantities such as voltage and current. In AC circuits, it depends on the circuit components and determines how effectively electrical power is transferred or consumed.",
                },
                {
                  id: "PHY12-CH19-T12",
                  topicNumber: 12,
                  topic: "Resonance in AC circuits",
                  brief:
                    "Resonance in a series LCR circuit occurs when inductive and capacitive reactances are equal. The impedance then reaches its minimum value, equal to the resistance, and the current reaches its maximum for a fixed applied voltage.",
                },
                {
                  id: "PHY12-CH19-T13",
                  topicNumber: 13,
                  topic: "Power in AC circuits",
                  brief:
                    "Power in an AC circuit varies with time as voltage and current change. For sinusoidal quantities, the average real power depends on their rms values and the cosine of the phase difference between them.",
                },
                {
                  id: "PHY12-CH19-T14",
                  topicNumber: 14,
                  topic: "Power factor",
                  brief:
                    "Power factor is the ratio of real power to apparent power in an AC circuit. For sinusoidal voltage and current, it equals the cosine of their phase difference and indicates how effectively electrical power is converted into useful work or heat.",
                },
                {
                  id: "PHY12-CH19-T15",
                  topicNumber: 15,
                  topic: "Transformers",
                  brief:
                    "A transformer uses mutual induction between primary and secondary coils to increase or decrease alternating voltage. In an ideal transformer, the voltage ratio equals the turns ratio, while the current ratio is inversely related to it.",
                },
                {
                  id: "PHY12-CH19-T16",
                  topicNumber: 16,
                  topic: "Energy transmission",
                  brief:
                    "Electrical energy is transmitted over long distances using high voltages to reduce current for a given power. Lower current reduces resistive losses in transmission lines, improving the efficiency of power delivery.",
                },
              ],
            },
          ],
        },
        {
          id: "PHY12-B05",
          branchNumber: 5,
          branchName: "Modern Physics",
          chapters: [
            {
              id: "PHY12-CH20",
              chapterNumber: 20,
              chapterName: "Electrons",
              topics: [
                {
                  id: "PHY12-CH20-T01",
                  topicNumber: 1,
                  topic: "Discovery of the electron",
                  brief:
                    "The electron was discovered by J. J. Thomson in 1897 through experiments with cathode rays, establishing that atoms contain negatively charged subatomic particles.",
                },
                {
                  id: "PHY12-CH20-T02",
                  topicNumber: 2,
                  topic: "Cathode rays",
                  brief:
                    "Cathode rays are streams of electrons produced in a discharge tube under low-pressure conditions when a high potential difference is applied.",
                },
                {
                  id: "PHY12-CH20-T03",
                  topicNumber: 3,
                  topic: "Properties of cathode rays",
                  brief:
                    "Cathode rays travel in straight lines, carry negative charge, are deflected by electric and magnetic fields, and can produce fluorescence and heating effects.",
                },
                {
                  id: "PHY12-CH20-T04",
                  topicNumber: 4,
                  topic: "Specific charge of the electron",
                  brief:
                    "The specific charge of an electron is the ratio of its charge to its mass, represented by e/m, and is approximately 1.76 × 10¹¹ C/kg in magnitude.",
                },
                {
                  id: "PHY12-CH20-T05",
                  topicNumber: 5,
                  topic: "Thomson's experiment",
                  brief:
                    "J. J. Thomson measured the electron's charge-to-mass ratio by studying the deflection of cathode rays in electric and magnetic fields.",
                },
                {
                  id: "PHY12-CH20-T06",
                  topicNumber: 6,
                  topic: "Millikan's oil-drop experiment",
                  brief:
                    "Robert Millikan measured the elementary electric charge by balancing the gravitational and electric forces acting on tiny charged oil droplets.",
                },
                {
                  id: "PHY12-CH20-T07",
                  topicNumber: 7,
                  topic: "Charge of an electron",
                  brief:
                    "An electron carries a negative elementary charge of approximately −1.602 × 10⁻¹⁹ coulombs, equal in magnitude to the proton's positive charge.",
                },
                {
                  id: "PHY12-CH20-T08",
                  topicNumber: 8,
                  topic: "Mass of an electron",
                  brief:
                    "The electron has a rest mass of approximately 9.109 × 10⁻³¹ kg, much smaller than the mass of a proton or neutron.",
                },
                {
                  id: "PHY12-CH20-T09",
                  topicNumber: 9,
                  topic: "Electron beams",
                  brief:
                    "An electron beam is a directed stream of electrons that can be accelerated, focused, and controlled using electric and magnetic fields.",
                },
                {
                  id: "PHY12-CH20-T10",
                  topicNumber: 10,
                  topic: "Applications of electrons",
                  brief:
                    "Electrons and electron beams are used in electron microscopes, cathode-ray displays, medical equipment, semiconductor manufacturing, and scientific research.",
                },
              ],
            },
            {
              id: "PHY12-CH21",
              chapterNumber: 21,
              chapterName: "Photons",
              topics: [
                {
                  id: "PHY12-CH21-T01",
                  topicNumber: 1,
                  topic: "Quantum theory of radiation",
                  brief:
                    "Quantum theory explains that electromagnetic radiation exchanges energy in discrete packets rather than always behaving as a continuous stream of energy.",
                },
                {
                  id: "PHY12-CH21-T02",
                  topicNumber: 2,
                  topic: "Photons",
                  brief:
                    "A photon is a quantum of electromagnetic radiation that carries energy and momentum but has zero rest mass and no electric charge.",
                },
                {
                  id: "PHY12-CH21-T03",
                  topicNumber: 3,
                  topic: "Energy of a photon",
                  brief:
                    "The energy of a photon is given by E = hf = hc/λ, where h is Planck's constant, f is frequency, c is the speed of light, and λ is wavelength.",
                },
                {
                  id: "PHY12-CH21-T04",
                  topicNumber: 4,
                  topic: "Momentum of a photon",
                  brief:
                    "A photon carries momentum despite having zero rest mass. Its momentum is given by p = E/c = h/λ.",
                },
                {
                  id: "PHY12-CH21-T05",
                  topicNumber: 5,
                  topic: "Photoelectric effect",
                  brief:
                    "The photoelectric effect is the emission of electrons from a material surface when incident electromagnetic radiation has sufficient frequency.",
                },
                {
                  id: "PHY12-CH21-T06",
                  topicNumber: 6,
                  topic:
                    "Experimental observations of the photoelectric effect",
                  brief:
                    "Experiments show that photoemission requires a threshold frequency, occurs with negligible delay under suitable conditions, and produces a maximum electron kinetic energy that depends on light frequency.",
                },
                {
                  id: "PHY12-CH21-T07",
                  topicNumber: 7,
                  topic: "Einstein's photoelectric equation",
                  brief:
                    "Einstein's equation is hf = φ + Kmax, stating that photon energy is used to overcome the work function φ and provide the emitted electron's maximum kinetic energy.",
                },
                {
                  id: "PHY12-CH21-T08",
                  topicNumber: 8,
                  topic: "Work function",
                  brief:
                    "The work function is the minimum energy needed to release an electron from a material's surface, commonly measured in electronvolts.",
                },
                {
                  id: "PHY12-CH21-T09",
                  topicNumber: 9,
                  topic: "Threshold frequency",
                  brief:
                    "Threshold frequency is the minimum frequency of incident radiation required to cause photoelectric emission from a particular material.",
                },
                {
                  id: "PHY12-CH21-T10",
                  topicNumber: 10,
                  topic: "Stopping potential",
                  brief:
                    "Stopping potential is the minimum reverse potential needed to stop even the most energetic photoelectrons from reaching the collector. Its magnitude satisfies eVs = Kmax.",
                },
                {
                  id: "PHY12-CH21-T11",
                  topicNumber: 11,
                  topic: "Photoelectric current",
                  brief:
                    "Photoelectric current is the electric current produced by emitted photoelectrons. For a given frequency above threshold, it generally increases with light intensity when other conditions remain fixed.",
                },
                {
                  id: "PHY12-CH21-T12",
                  topicNumber: 12,
                  topic: "Wave-particle duality",
                  brief:
                    "Wave-particle duality is the principle that light and matter exhibit both wave-like and particle-like properties depending on how they are observed.",
                },
                {
                  id: "PHY12-CH21-T13",
                  topicNumber: 13,
                  topic: "Applications of the photoelectric effect",
                  brief:
                    "The photoelectric effect is used in photodiodes, light sensors, automatic lighting systems, optical detectors, and solar-energy technologies.",
                },
              ],
            },
            {
              id: "PHY12-CH22",
              chapterNumber: 22,
              chapterName: "Semiconductor Devices",
              topics: [
                {
                  id: "PHY12-CH22-T01",
                  topicNumber: 1,
                  topic: "Conductors, insulators and semiconductors",
                  brief:
                    "Conductors allow electric current to flow easily, insulators strongly resist current, and semiconductors have electrical conductivity between these two groups that can be controlled.",
                },
                {
                  id: "PHY12-CH22-T02",
                  topicNumber: 2,
                  topic: "Energy-band theory",
                  brief:
                    "Energy-band theory describes the allowed energy ranges of electrons in solids, especially the valence band, conduction band, and energy gap between them.",
                },
                {
                  id: "PHY12-CH22-T03",
                  topicNumber: 3,
                  topic: "Intrinsic semiconductors",
                  brief:
                    "An intrinsic semiconductor is a pure semiconductor in which the concentrations of free electrons and holes are equal.",
                },
                {
                  id: "PHY12-CH22-T04",
                  topicNumber: 4,
                  topic: "Extrinsic semiconductors",
                  brief:
                    "An extrinsic semiconductor is formed by adding controlled impurities to a pure semiconductor to increase its conductivity and create either n-type or p-type material.",
                },
                {
                  id: "PHY12-CH22-T05",
                  topicNumber: 5,
                  topic: "Doping",
                  brief:
                    "Doping is the deliberate addition of small amounts of suitable impurities to a semiconductor to change its electrical properties.",
                },
                {
                  id: "PHY12-CH22-T06",
                  topicNumber: 6,
                  topic: "N-type semiconductors",
                  brief:
                    "An n-type semiconductor is formed by adding donor impurities that provide extra electrons, making electrons the majority charge carriers.",
                },
                {
                  id: "PHY12-CH22-T07",
                  topicNumber: 7,
                  topic: "P-type semiconductors",
                  brief:
                    "A p-type semiconductor is formed by adding acceptor impurities that create holes, making holes the majority charge carriers.",
                },
                {
                  id: "PHY12-CH22-T08",
                  topicNumber: 8,
                  topic: "P-N junction",
                  brief:
                    "A P-N junction forms where p-type and n-type semiconductor regions meet, creating a depletion region and an internal electric field.",
                },
                {
                  id: "PHY12-CH22-T09",
                  topicNumber: 9,
                  topic: "Forward bias",
                  brief:
                    "Forward bias connects the positive terminal of a voltage source to the p-side and the negative terminal to the n-side, reducing the potential barrier and allowing greater current.",
                },
                {
                  id: "PHY12-CH22-T10",
                  topicNumber: 10,
                  topic: "Reverse bias",
                  brief:
                    "Reverse bias connects the positive terminal to the n-side and the negative terminal to the p-side, widening the depletion region and normally allowing only a small leakage current.",
                },
                {
                  id: "PHY12-CH22-T11",
                  topicNumber: 11,
                  topic: "Semiconductor diode",
                  brief:
                    "A semiconductor diode is a two-terminal device, commonly based on a P-N junction, that conducts current readily in one direction and restricts it in the other under normal operating conditions.",
                },
                {
                  id: "PHY12-CH22-T12",
                  topicNumber: 12,
                  topic: "Rectification",
                  brief:
                    "Rectification is the conversion of alternating current into unidirectional current using devices such as semiconductor diodes.",
                },
                {
                  id: "PHY12-CH22-T13",
                  topicNumber: 13,
                  topic: "Half-wave rectifier",
                  brief:
                    "A half-wave rectifier uses a diode to pass one half-cycle of an alternating input and block the opposite half-cycle, producing a pulsating output.",
                },
                {
                  id: "PHY12-CH22-T14",
                  topicNumber: 14,
                  topic: "Full-wave rectifier",
                  brief:
                    "A full-wave rectifier converts both half-cycles of an alternating input into a pulsating output of the same polarity, commonly using four diodes in a bridge or two diodes with a centre-tapped transformer.",
                },
                {
                  id: "PHY12-CH22-T15",
                  topicNumber: 15,
                  topic: "Zener diode",
                  brief:
                    "A Zener diode is designed to operate in reverse breakdown at a specified voltage and is commonly used for voltage regulation and reference circuits.",
                },
                {
                  id: "PHY12-CH22-T16",
                  topicNumber: 16,
                  topic: "Transistors",
                  brief:
                    "A transistor is a semiconductor device used to amplify signals or act as an electronic switch. Common types include bipolar junction transistors and field-effect transistors.",
                },
                {
                  id: "PHY12-CH22-T17",
                  topicNumber: 17,
                  topic: "Basic logic gates",
                  brief:
                    "Logic gates perform Boolean operations on binary inputs. The basic gates are AND, OR, and NOT; NAND, NOR, XOR, and XNOR are also widely used.",
                },
                {
                  id: "PHY12-CH22-T18",
                  topicNumber: 18,
                  topic: "Applications of semiconductor devices",
                  brief:
                    "Semiconductor devices are used in computers, mobile phones, power supplies, communication systems, sensors, amplifiers, digital circuits, and renewable-energy systems.",
                },
              ],
            },
            {
              id: "PHY12-CH23",
              chapterNumber: 23,
              chapterName: "Quantization of Energy",
              topics: [
                {
                  id: "PHY12-CH23-T01",
                  topicNumber: 1,
                  topic: "Quantisation of energy",
                  brief:
                    "Quantisation of energy means that certain physical systems can possess or exchange energy only in specific discrete amounts rather than arbitrary continuous values.",
                },
                {
                  id: "PHY12-CH23-T02",
                  topicNumber: 2,
                  topic: "Black-body radiation",
                  brief:
                    "Black-body radiation is the electromagnetic radiation emitted by an ideal body that absorbs all incident radiation, with its spectrum depending on temperature.",
                },
                {
                  id: "PHY12-CH23-T03",
                  topicNumber: 3,
                  topic: "Planck's quantum hypothesis",
                  brief:
                    "Planck proposed that oscillators exchange energy in discrete packets given by E = nhf, where n is a non-negative integer, h is Planck's constant, and f is frequency.",
                },
                {
                  id: "PHY12-CH23-T04",
                  topicNumber: 4,
                  topic: "Atomic spectra",
                  brief:
                    "Atomic spectra consist of characteristic wavelengths of radiation emitted or absorbed by atoms as their electrons transition between allowed energy levels.",
                },
                {
                  id: "PHY12-CH23-T05",
                  topicNumber: 5,
                  topic: "Line spectra",
                  brief:
                    "A line spectrum contains distinct wavelengths rather than a continuous range, reflecting specific energy differences between atomic states.",
                },
                {
                  id: "PHY12-CH23-T06",
                  topicNumber: 6,
                  topic: "Bohr's model of the hydrogen atom",
                  brief:
                    "Bohr's model describes the hydrogen atom as having an electron in certain allowed stationary orbits with quantised energies and radiation emitted or absorbed during transitions.",
                },
                {
                  id: "PHY12-CH23-T07",
                  topicNumber: 7,
                  topic: "Bohr's postulates",
                  brief:
                    "Bohr proposed that electrons occupy stationary states without radiating energy, their angular momentum is quantised, and radiation is emitted or absorbed when they transition between states.",
                },
                {
                  id: "PHY12-CH23-T08",
                  topicNumber: 8,
                  topic: "Energy levels of hydrogen",
                  brief:
                    "In the Bohr model, the hydrogen energy levels are given by En = −13.6/n² eV, where n is a positive integer and the zero of energy is taken for a free electron and proton at infinite separation.",
                },
                {
                  id: "PHY12-CH23-T09",
                  topicNumber: 9,
                  topic: "Emission and absorption spectra",
                  brief:
                    "An emission spectrum is produced when atoms release photons during transitions to lower energy levels, while an absorption spectrum forms when atoms absorb photons to reach higher energy levels.",
                },
                {
                  id: "PHY12-CH23-T10",
                  topicNumber: 10,
                  topic: "Excitation and ionisation energies",
                  brief:
                    "Excitation energy is the energy required to move an atom from a lower energy state to a higher bound state, while ionisation energy is the energy needed to remove an electron completely from the atom.",
                },
                {
                  id: "PHY12-CH23-T11",
                  topicNumber: 11,
                  topic: "Limitations of Bohr's model",
                  brief:
                    "Bohr's model successfully explains hydrogen's spectrum but cannot adequately describe multi-electron atoms, spectral fine structure, or several effects explained by modern quantum mechanics.",
                },
                {
                  id: "PHY12-CH23-T12",
                  topicNumber: 12,
                  topic: "Applications of atomic models",
                  brief:
                    "Atomic models help explain atomic spectra, electronic energy levels, chemical behaviour, laser operation, and the interaction of matter with electromagnetic radiation.",
                },
              ],
            },
            {
              id: "PHY12-CH24",
              chapterNumber: 24,
              chapterName: "Radioactivity and Nuclear Reaction",
              topics: [
                {
                  id: "PHY12-CH24-T01",
                  topicNumber: 1,
                  topic: "Radioactivity",
                  brief:
                    "Radioactivity is the spontaneous transformation of unstable atomic nuclei into more stable configurations, accompanied by the emission of particles or electromagnetic radiation.",
                },
                {
                  id: "PHY12-CH24-T02",
                  topicNumber: 2,
                  topic: "Alpha, beta and gamma radiation",
                  brief:
                    "Alpha radiation consists of helium nuclei, beta radiation consists of energetic electrons or positrons, and gamma radiation consists of high-energy photons emitted by nuclei.",
                },
                {
                  id: "PHY12-CH24-T03",
                  topicNumber: 3,
                  topic: "Properties of radioactive emissions",
                  brief:
                    "Alpha, beta, and gamma emissions differ in charge, mass, ionising ability, penetrating power, and deflection by electric and magnetic fields.",
                },
                {
                  id: "PHY12-CH24-T04",
                  topicNumber: 4,
                  topic: "Radioactive decay law",
                  brief:
                    "The radioactive decay law states that the number of undecayed nuclei decreases exponentially with time, expressed as N = N₀e^(−λt).",
                },
                {
                  id: "PHY12-CH24-T05",
                  topicNumber: 5,
                  topic: "Decay constant",
                  brief:
                    "The decay constant λ is the probability per unit time that a nucleus will decay, and it determines the rate of radioactive decay.",
                },
                {
                  id: "PHY12-CH24-T06",
                  topicNumber: 6,
                  topic: "Half-life",
                  brief:
                    "Half-life is the time required for half of the radioactive nuclei in a sample to decay. It is related to the decay constant by T½ = ln 2/λ.",
                },
                {
                  id: "PHY12-CH24-T07",
                  topicNumber: 7,
                  topic: "Mean life",
                  brief:
                    "Mean life is the average lifetime of a radioactive nucleus before decay and is equal to τ = 1/λ.",
                },
                {
                  id: "PHY12-CH24-T08",
                  topicNumber: 8,
                  topic: "Activity of a radioactive sample",
                  brief:
                    "Activity is the number of nuclear decays per second in a radioactive sample, given by A = λN and measured in becquerels.",
                },
                {
                  id: "PHY12-CH24-T09",
                  topicNumber: 9,
                  topic: "Nuclear equations",
                  brief:
                    "Nuclear equations represent nuclear reactions and radioactive decays while conserving total nucleon number, electric charge, and energy-momentum.",
                },
                {
                  id: "PHY12-CH24-T10",
                  topicNumber: 10,
                  topic: "Mass-energy equivalence",
                  brief:
                    "Einstein's mass-energy relation, E = mc², states that mass corresponds to energy, allowing small changes in nuclear mass to produce large amounts of energy.",
                },
                {
                  id: "PHY12-CH24-T11",
                  topicNumber: 11,
                  topic: "Mass defect",
                  brief:
                    "Mass defect is the difference between the total mass of the separate nucleons and the actual mass of a bound nucleus.",
                },
                {
                  id: "PHY12-CH24-T12",
                  topicNumber: 12,
                  topic: "Binding energy",
                  brief:
                    "Nuclear binding energy is the energy required to separate a nucleus completely into its constituent nucleons and is equal to its mass defect multiplied by c².",
                },
                {
                  id: "PHY12-CH24-T13",
                  topicNumber: 13,
                  topic: "Nuclear fission",
                  brief:
                    "Nuclear fission is the splitting of a heavy nucleus into lighter nuclei, often releasing neutrons and a substantial amount of energy.",
                },
                {
                  id: "PHY12-CH24-T14",
                  topicNumber: 14,
                  topic: "Nuclear fusion",
                  brief:
                    "Nuclear fusion is the joining of light nuclei to form a heavier nucleus, releasing energy when the products have greater binding energy per nucleon.",
                },
                {
                  id: "PHY12-CH24-T15",
                  topicNumber: 15,
                  topic: "Chain reactions",
                  brief:
                    "A nuclear chain reaction occurs when neutrons released in one fission event trigger further fission events, allowing the process to continue.",
                },
                {
                  id: "PHY12-CH24-T16",
                  topicNumber: 16,
                  topic: "Nuclear reactors",
                  brief:
                    "A nuclear reactor sustains and controls a nuclear fission chain reaction to produce useful energy, typically converting heat into electricity.",
                },
                {
                  id: "PHY12-CH24-T17",
                  topicNumber: 17,
                  topic: "Radiation safety",
                  brief:
                    "Radiation safety reduces exposure to ionising radiation through measures such as limiting exposure time, increasing distance, using appropriate shielding, and monitoring dose.",
                },
                {
                  id: "PHY12-CH24-T18",
                  topicNumber: 18,
                  topic: "Applications of radioactivity",
                  brief:
                    "Radioactivity is used in medical diagnosis and treatment, industrial inspection, scientific research, archaeological dating, and tracing processes in biology and chemistry.",
                },
              ],
            },
            {
              id: "PHY12-CH25",
              chapterNumber: 25,
              chapterName: "Recent Trends in Physics",
              topics: [
                {
                  id: "PHY12-CH25-T01",
                  topicNumber: 1,
                  topic: "Modern developments in physics",
                  brief:
                    "Modern developments in physics include advances in quantum technologies, materials science, astrophysics, particle physics, energy systems, and the study of matter and the universe.",
                },
                {
                  id: "PHY12-CH25-T02",
                  topicNumber: 2,
                  topic: "Particle physics",
                  brief:
                    "Particle physics investigates the fundamental constituents of matter and the forces and interactions governing their behaviour.",
                },
                {
                  id: "PHY12-CH25-T03",
                  topicNumber: 3,
                  topic: "Fundamental particles",
                  brief:
                    "Fundamental particles are particles not known to be made of smaller constituents, including quarks, leptons, and force-carrying bosons in the Standard Model.",
                },
                {
                  id: "PHY12-CH25-T04",
                  topicNumber: 4,
                  topic: "Quantum physics",
                  brief:
                    "Quantum physics describes matter and radiation at atomic and subatomic scales, including quantised energy, probability, superposition, and quantum measurement.",
                },
                {
                  id: "PHY12-CH25-T05",
                  topicNumber: 5,
                  topic: "Relativity and its applications",
                  brief:
                    "Relativity describes space, time, motion, and gravity under conditions where classical mechanics is insufficient. Its applications include GPS timing corrections, particle accelerators, and astrophysics.",
                },
                {
                  id: "PHY12-CH25-T06",
                  topicNumber: 6,
                  topic: "Nanotechnology",
                  brief:
                    "Nanotechnology studies and applies materials and structures at approximately 1–100 nanometres, where size-dependent properties can enable new electronic, medical, and material technologies.",
                },
                {
                  id: "PHY12-CH25-T07",
                  topicNumber: 7,
                  topic: "Superconductivity",
                  brief:
                    "Superconductivity is a state in which certain materials exhibit zero electrical resistance and expel magnetic fields below a critical temperature under suitable conditions.",
                },
                {
                  id: "PHY12-CH25-T08",
                  topicNumber: 8,
                  topic: "Lasers",
                  brief:
                    "A laser produces an intense, coherent, and highly directional beam of light through stimulated emission of radiation.",
                },
                {
                  id: "PHY12-CH25-T09",
                  topicNumber: 9,
                  topic: "Fibre optics",
                  brief:
                    "Fibre optics transmits light through thin transparent fibres using total internal reflection, enabling high-capacity communication and precise sensing.",
                },
                {
                  id: "PHY12-CH25-T10",
                  topicNumber: 10,
                  topic: "Medical physics",
                  brief:
                    "Medical physics applies physical principles to healthcare technologies such as diagnostic imaging, radiation therapy, ultrasound, and radiation protection.",
                },
                {
                  id: "PHY12-CH25-T11",
                  topicNumber: 11,
                  topic: "Nuclear energy",
                  brief:
                    "Nuclear energy is released through nuclear reactions, especially fission in current commercial power plants, and can be converted into electricity or useful heat.",
                },
                {
                  id: "PHY12-CH25-T12",
                  topicNumber: 12,
                  topic: "Renewable energy technologies",
                  brief:
                    "Renewable energy technologies convert naturally replenished sources such as sunlight, wind, flowing water, and geothermal heat into usable energy.",
                },
                {
                  id: "PHY12-CH25-T13",
                  topicNumber: 13,
                  topic: "Space physics",
                  brief:
                    "Space physics studies physical processes in space, including solar activity, planetary magnetic fields, cosmic radiation, and interactions between the solar wind and celestial bodies.",
                },
                {
                  id: "PHY12-CH25-T14",
                  topicNumber: 14,
                  topic: "Physics in communication technology",
                  brief:
                    "Communication technologies rely on electromagnetic waves, semiconductor electronics, optical fibres, antennas, modulation, and signal processing to transmit information.",
                },
                {
                  id: "PHY12-CH25-T15",
                  topicNumber: 15,
                  topic: "Emerging applications of physics",
                  brief:
                    "Emerging applications of physics include quantum computing, advanced sensors, photonics, fusion research, new functional materials, and improved energy-storage technologies.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
