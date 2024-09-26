import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 3);
        assertEquals("the value should be equal",5, result);
    }


    @Test
    public void testSubtract() {
        Calculator calculator = new Calculator();
        int result = calculator.subtract(5, 2);
        assertEquals(3, result);
    }

    @Test
    public void testAddNegativeNumbers() {
        Calculator calculator = new Calculator();
        int result = calculator.add(-2, -3);
        assertEquals(-5, result);
    }

    @Test
    public void testMultiply() {
        Calculator calculator = new Calculator();
        int result = calculator.multiply(2, 3);
        assertEquals(6, result);
    }
    // Add more test cases for subtract, divide, modulo, and power

    @Test
    public void testSubtractNegativeNumbers() {
        Calculator calculator = new Calculator();
        int result = calculator.subtract(-5, -2);
        assertEquals(-3, result);
    }

    @Test
    public void testMultiplyNegativeNumbers() {
        Calculator calculator = new Calculator();
        int result = calculator.multiply(-2, -3);
        assertEquals(6, result);
    }

    @Test
    public void testDivideNegativeNumbers() {
        Calculator calculator = new Calculator();
        int result = calculator.divide(-6, 2);
        assertThrows(ArithmeticException.class, () -> calculator.divide(-6, 0));
        assertEquals(-3, result);
    }

    // use before each method

    @Test
    public void testModuloNegativeNumbers() {
        Calculator calculator = new Calculator();
        int result = calculator.modulo(-17, -4);        
        assertEquals(1, result);
    }

    @Test
    public void testDivide() {
        Calculator calculator = new Calculator();
        int result = calculator.divide(6, 2);
        assertEquals(3, result);
    }

    @Test
    public void testModulo() {
        Calculator calculator = new Calculator();
        int result = calculator.modulo(17, 4);
        assertEquals(1, result);
    }

    @Test
    public void testPower() {
        Calculator calculator = new Calculator();
        int result = calculator.power(2, 3);
        assertEquals(8, result);
    }
}