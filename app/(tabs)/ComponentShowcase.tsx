import { ScrollView, View, Text, Button, Image, StyleSheet } from 'react-native';

export default function ComponentShowcase() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🌟 Component Showcase</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Text Component</Text>
        <Text style={styles.paragraph}>
          This is a simple <Text style={styles.bold}>Text</Text> component in React Native.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Button Component</Text>
        <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Image Component</Text>
        <Image
            source={require('@/assets/images/gengar.jpg')}
          style={styles.gengar}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About ME</Text>
        <Text style={styles.paragraph}>
          Nazareth Janea 
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>ScrollView Component</Text>
        <Text style={styles.paragraph}>
          The entire screen is wrapped in a <Text style={styles.bold}>ScrollView</Text>.  
          This allows the content to scroll when it doesn’t fit on the screen.
        </Text>
      </View>

       <View style={styles.card}>
        <Text style={styles.sectionTitle}>ScrollView Component V2</Text>
        <Text style={styles.paragraph}>
          The entire screen is wrapped in a <Text style={styles.bold}>ScrollView</Text>.  
          Hi! I'm Naz, a curious learner passionate about technology, problem-solving, and building things that make life easier. I enjoy exploring coding, design, and how tech can connect people and ideas. Beyond just writing code, I love understanding how systems work, experimenting with new tools, and constantly pushing myself to grow.
        I believe in using technology not just for innovation, but also to create meaningful impact — whether it’s through apps that help people, designs that inspire creativity, or solutions that solve real-world challenges. When I’m not coding, I enjoy diving into design concepts, reading about emerging trends, and collaborating with others to share knowledge and build projects together.
        </Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e293b',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#0f172a',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#334155',
  },
  bold: {
    fontWeight: '700',
    color: '#1e40af',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 8,
    alignSelf: 'center',
  },

  gengar: {
    height: 200,
    width: 200,
    
  },

});
