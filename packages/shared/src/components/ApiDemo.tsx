import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {scaleFontSize, scaleWidth, scaleHeight} from '../utils/scaling';
import {createHttpClient} from '../services/httpClient';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const httpClient = createHttpClient({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

export const ApiDemo: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomPost = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const randomId = Math.floor(Math.random() * 100) + 1;
      const response = await httpClient.get<Post>(`/posts/${randomId}`);
      if (response.ok) {
        setPost(response.data);
      } else {
        setError(`Request failed with status ${response.status}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Demo (superagent)</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={fetchRandomPost}
        disabled={loading}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>
          {loading ? 'Loading...' : 'Fetch Random Post'}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#4CAF50" />}

      {error && <Text style={styles.error}>{error}</Text>}

      {post && !loading && (
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>#{post.id}: {post.title}</Text>
          <Text style={styles.postBody} numberOfLines={3}>
            {post.body}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scaleWidth(24),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: scaleWidth(8),
    margin: scaleWidth(16),
  },
  title: {
    fontSize: scaleFontSize(28),
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: scaleHeight(16),
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: scaleWidth(16),
    borderRadius: scaleWidth(8),
    alignItems: 'center',
    marginBottom: scaleHeight(16),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(20),
    fontWeight: '600',
  },
  error: {
    color: '#FF5252',
    fontSize: scaleFontSize(18),
    marginTop: scaleHeight(8),
  },
  postContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: scaleWidth(16),
    borderRadius: scaleWidth(8),
    marginTop: scaleHeight(8),
  },
  postTitle: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: scaleHeight(8),
  },
  postBody: {
    fontSize: scaleFontSize(16),
    color: '#CCCCCC',
    lineHeight: scaleFontSize(22),
  },
});
