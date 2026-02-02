import wave
import math
import struct

# Audio parameters
sample_rate = 44100
duration = 2.0  # seconds
frequency = 440.0  # Hz (A4)

# Create the wave file
file_path = "assets/music.wav"
with wave.open(file_path, 'w') as wav_file:
    wav_file.setnchannels(1)  # Mono
    wav_file.setsampwidth(2)  # 2 bytes per sample (16-bit)
    wav_file.setframerate(sample_rate)
    
    # Generate audio frames
    for i in range(int(sample_rate * duration)):
        # Sine wave formula
        value = int(32767.0 * math.sin(2.0 * math.pi * frequency * i / sample_rate))
        # Pack the value as a 16-bit short (little-endian)
        data = struct.pack('<h', value)
        wav_file.writeframes(data)

print(f"Generated {file_path}")
