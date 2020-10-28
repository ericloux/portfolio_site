function asm6502() {
    let content = "";

    content += `
    <h3>
        Assembly Language
    </h3>

    Assembly language is something that had always interested me, yet I seemed to lack the ability to teach myself. I'd tried a few times, 
    but hadn't been able to figure out what environment to run assembly in, much less which type of assembly I'd want to write to start.<br><br>

As an aficianado of classic gaming, I've always been interested in the MOS 6502. This chip was the brain behind a variety of systems, including 
the Nintendo Entertainment System, which I spent a considerable portion of my childhood playing. I'd always fantasized about writing my own 
NES game, but trying to get everything set up to be able to write and compile 6502 assembly on my own machine was too much for me.<br><br>

In fall of 2020, I was enrolling for my courses and noticed that MTSU offered a course in assembly language. I was incredibly excited, and 
since I had the requirements necessary to enroll, I signed up. Finally I was going to have an opportunity to explore assembly language in a 
setting with an instructor to guide me. <br><br>

The following fall, I started officially learning x86 architecture assembly language. I can't say that it was easy or intuitive, but watching 
my understanding grow has been incredibly satisfying.<br><br>

With x86 assembly under my belt, I decided to return to 6502 assembly. I found a great <a href="skilldrick.github.io/easy6502/">6502 tutorial 
and emulator</a> and started digging into the language. Quickly I realized that it was incredibly difficult compared to x86. Transferring from 
thinking in registers up to quadword size to only a byte was incredibly difficult. The limited instruction set for the 6502 was another 
characteristic that I found challenging. The fact that operations such as multiplication were not native instructions was a surprise to me.<br><br>

I ended up deciding that I wanted to write some simple subroutines for the 6502 in order to better understand how to use it. The first that 
I've written that functions correctly is the mult subroutine shown below. This subroutine multiplies the value in the X register by the value 
in the Y register, and then stores the result in the same registers, with X being the large byte and Y being the small byte.<br><br>

Here is the code. In this example, I've included a small driver program which initializes the values in the X and Y registers to demonstrate 
the subroutine. In this example, I multiplied 70h by 4h, which results in 1c0h. The result is stored as 1h in the X register, and c0h in the 
Y register.<br><br>

<span class="code-snippet">
    LDX #$70<br>
    LDY #$4<br>
    JSR mult<br>
    BRK<br>
<br>
mult:<br>
    ; multiplies X and Y and stores in X:Y<br>
    PHA<br>
    TXA<br>
    DEY<br>
    STX $00<br>
    LDX #$00<br>
mult_loop:<br>
    CLC<br>
    ADC $00<br>
    CMP $00<br>
    BMI mult_overflow<br>
    JMP mult_check<br>
mult_overflow:<br>
    INX<br>
    JMP mult_check<br>
mult_check:<br>
    DEY<br>
    CPY #$00<br>
    BNE mult_loop<br>
    TAY<br>
    PLA<br>
    RTS</span><br><br>
	
The subroutine is fairly simple. Essentially, the value in the X register is put into the accumulator, then added to itself the number of times 
specified in the Y register minus one, as the accumulator was initialized to the value. However, a few other notable things happen. First, the 
value in the accumulator is pushed onto the stack so it will be preserved following the operation (PHA and PLA operations). The value in X is 
also stored in $00 in memory, so that X can be initialized to zero. After the value is added to the accumulator, the algorithm tests whether 
the value in A is less than the X multiplicand. If so, then it means that A has overflowed, so X is incremented. Finally, the value in Y is 
decremented each time it is added to the accumulator and is used as a loop counter. Once it reaches zero, then the value in the accumulator is 
transferred back to the Y register and the accumulator's original value is pulled off of the stack before the subroutine terminates.<br><br>

I know that there are a few issues with this subroutine. First, instead of comparing the accumulator with the X operand to determine overflow, 
it would be simpler to see if the carry flag was set during the add operation. I also don't like that the subroutine requires the use of an 
extra memory address, $00, to do its job. However, overall I'm fairly happy to be able to have been able to write this program in such a low-level 
language, and I'm excited to see what I'll be able to do as I continue my exploration. Maybe one day I'll write that NES game!<br><br><br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}
 
export {asm6502};