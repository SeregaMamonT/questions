export function listenQuery(query, callbacks = {}) {
  query.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        const document = {
          id: change.doc.id,
          ...change.doc.data(),
        };

        switch (change.type) {
          case 'added':
            return callbacks.onAdded && callbacks.onAdded(document);
          case 'modified':
            return callbacks.onModified && callbacks.onModified(document);
          case 'removed':
            return callbacks.onRemoved && callbacks.onRemoved(document);
        }
      });
    },
    error => {
      if (callbacks.onError) {
        callbacks.onError(error);
      }
      else {
        console.log('firestore-helpers#listenQuery', error);
      }
    }
  );
}

export function readList(query) {
  return query.get().then(result => {
    console.log(result);
    return result;
  });
}

export function readSingle(query) {
  return query.get().then(result => {
    if (result.exists) {
      return {
        id: result.id,
        ...result.data(),
      };
    }
  });
}
